export const removeHTMLTags = (str) => {
    const regex = /(<([^>]+)>)/ig;
    return  str.replace(regex, '')
        .replace("&hellip;","...")
        .replace("&nbsp;", "");
}