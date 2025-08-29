doTask1(function(result1) {
    doTask2(result1, function(result2) {
        doTask3(result2, function(result3) {
            doTask4(result3, function(result4) {
                console.log("All tasks done:", result4);
            });
        });
    });
});
