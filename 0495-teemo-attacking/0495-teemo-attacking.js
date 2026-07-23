/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if(timeSeries.length==0) return 0;
    let total= 0;

    for(let i=0; i<timeSeries.length; i++){

        let gap= timeSeries[i+1]-timeSeries[i];//Calculate gap to next attack

        if(i == timeSeries.length-1){//Last attack so always add full duration
            total +=duration;
        }else{
            //Add either full duration or just until next attack
            total += Math.min(duration, gap);
        }

    }   
    return total;
};