require('dotenv').config();

// With ES5
var JiraApi = require('jira-client');
  const { Octokit } = require("@octokit/rest");

  const octokit = new Octokit({ 
    auth: process.env.GITHUB_TOKEN,
    baseUrl: 'https://api.github.com',
    log: {
        debug: () => {},
        info: () => {},
        warn: console.warn,
        error: console.error
    },
    request: {
        agent: undefined,
        fetch: undefined,
        timeout: 0
    }
});

// Initialize
var jira = new JiraApi({
  protocol: 'https',
  host: process.env.JIRA_HOST,
  username: process.env.JIRA_USER_NAME,
  password: process.env.JIRA_TOKEN,
  apiVersion: '2',
  strictSSL: true
});


  const findJiraIssue = (number) =>{ 
    return new Promise((resolve, reject)=>{
      jira.findIssue(number)
      .then(function(issue) {
        const { summary } = issue.fields;
        console.log('Summary: ' + summary);
        resolve({
          icon:  "bi bi-check-circle-fill",
          title: summary,
          link: `https://totalwine.atlassian.net/browse/${number}`
        });
      })
      .catch(function(err) {
        console.error(err);
        reject(err)
      });
    });
  }

  function findJiraIssues (commits, resolve){
    let promises = [];
    while(commits.length > 0){
      promises.push(findJiraIssue(commits.pop()));
    }
    Promise.all(promises).then((results)=>{
      console.log('res',results);
      resolve(results);
    });
  };

  const jiraTemplate = {
      icon: "bi bi-check-circle-fill"
  }

  const errorJiraTemplate = {
    icon: "bi bi-x-circle"
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
class DataHandler {
    constructor() {

    }
    fetchGitHubData() {
        const jiras = [];
        return new Promise((resolve)=>{
            octokit.rest.repos.listCommits({
                owner: "tylerbrownhenry",
                repo: "engineering-training",
              }).then((resp)=>{
                    resp.data.forEach((commit)=>{
                        var jira_matcher = /([A-Z][A-Z0-9]+-[0-9]+)/g;                        
                        const mess = commit.commit.message;
                        const jira = mess.match(jira_matcher);
                        if(jiras.indexOf(jira) === -1 && jira !== null) {
                          jiras.push(jira);
                        }
                    })
                    findJiraIssues(jiras, resolve);  
              })
        });
    }
  }
  const dataHandler = new DataHandler();
  module.exports = dataHandler;