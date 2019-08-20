
module.exports = getDate;

function getDate()
{
    var d = new Date();

    var options = {
        weekday: "long",
        day: 'numeric',
        month: 'long'
    };
    var currentDay = d.toLocaleDateString("en-US", options);
    return currentDay;
}
