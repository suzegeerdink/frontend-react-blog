function ReadTime(content) {
    const wordCount = content.trim().split(/\s+/).length;
    const wordsPerMinute = 300;
    const readTime = (wordCount / wordsPerMinute).toFixed(0);
    return (
        Number(readTime)
    );
}

export default ReadTime;

// .trim() zorgt ervoor dat de spaties 'weggehaald' worden, want die tellen in mijn content (NewPost.jxs) als karakters.
// .split(/\s+/) zorgt ervoor dat de woorden gesplits worden van elkaar, het wordt gesplitst op de spaties ertussen.