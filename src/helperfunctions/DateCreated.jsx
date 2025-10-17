function DateCreated(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };

    return new Date(date).toLocaleDateString("nl-NL", options);
}

export default DateCreated;
