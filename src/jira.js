var JiraClient = require('../node_modules/jira-connector/index.js');

var jira = new JiraClient( {
    host: 'fineossupport.atlassian.net',
    basic_auth: {
        username: 'admin',
        password: 'f1n3052015'
    }
});

jira.search.search({
    jql: 'project=FSD'
}, function(error, issue) {
    console.log(issue);
});

jira.issue.getIssue({
    issueKey: 'FSD-1317'
}, function(error, issue) {
    console.log(issue.fields.summary);
});


