"use strict";
// fetch(url, {headers: {'Authorization': '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'}})

        function getUsersFromGithubAsJSON(userName) {
            return fetch("https://api.github.com/users/"+userName+"/events/public",
                {headers: {'Authorization': gitHubKey}})
                .then(function(response) {
                    return response.json();
                });
        }

            getUsersFromGithubAsJSON("christopher-m-alvarez")
                .then(function(userData){
                    console.log(userData[0].created_at)
                // for(const user of userData){
                //     console.log(user);
                // }
            });

function wait(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("it worked")
        }, time);
    });
}
wait(5000)

