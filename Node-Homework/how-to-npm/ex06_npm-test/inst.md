
     Now you've installed something, and used `npm ls` to show what's going on.  
       
     If you look at the package.json file, it has this rather odd bit in it:  
       
       "scripts": {  
         "test": "echo \"Error: no test specified\" && exit 1"  
       },  
       
     npm can be used as a task runner with its "scripts" property.  Almost  
     every module and project will have a test script that runs to make  
     sure everything is good.  In order to help remind you to do this, npm  
     puts an "always failing" test in there by default.  
       
     First, create a file called `test.js`.  For the purposes of this workshop  
     you can leave it blank, but this would be where you'd write your  
     tests (this is npm class, not testing class).  The test has to exit  
     without throwing an error, or else the test fails.  
       
     Then, edit your `package.json` file to make your scripts section look like  
     this instead:  
       
       "scripts": {  
         "test": "node test.js"  
       },  
       
     Once that's done, run `how-to-npm verify` to check your work.  
       
     Additional info: If you wanted to actually run any tests you'd written in  
     `test.js` with the "test" script, you'd run `npm test`.  
       
     The docs for npm's scripts property can be found here:  
     https://docs.npmjs.com/misc/scripts  
   
