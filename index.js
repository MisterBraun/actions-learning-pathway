const core = require('@actions/core')
const github = require('@actions/github')

try {
  // Fetch value of input 'who-to-greet' specified in action.yml
  const nameToGreet = core.getInput('who-to-greet');
  console.log('Hello ${nameToGreet}!'};

  // Record time of greeting as Output
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
} catch (error) {
  // Handle errors and indicate failure
  core.setFailed(error.message);
}
