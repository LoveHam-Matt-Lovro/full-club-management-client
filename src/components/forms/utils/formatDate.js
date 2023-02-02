export const formatDate = (input) => {
    const date = new Date(input);
    let day = date.getDate();

    let ordinalSuffix = "th";
    if (day % 10 === 1 && day !== 11) {
        ordinalSuffix = "st";
    } else if (day % 10 === 2 && day !== 12) {
        ordinalSuffix = "nd";
    } else if (day % 10 === 3 && day !== 13) {
        ordinalSuffix = "rd";
    }
    let options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };
    // formatted date with ordinal suffix
    let formattedDate = date.toLocaleDateString("en-US", options) + ordinalSuffix;
    let splitDate = formattedDate.split(",");
    let result = splitDate[0] + ordinalSuffix + "," + splitDate[1]



    return (result.slice(0, -2))
}

