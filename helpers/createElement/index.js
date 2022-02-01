export const createElement = (document, obj) => {
    let finishedObj = {};

    for (const [key, value] of Object.entries(obj)) {
        finishedObj[key] =  document.createElement(value);
    }

    return finishedObj;
};

export const addContent = (tag, properties) => {
    const { className, textContent } = properties;

    tag.classList.add(className);
    tag.textContent = textContent;

    return tag;
};

export const prepareFinal = (taskList, li, toAppend) => {
    taskList.appendChild(li);
    toAppend.forEach(element => li.appendChild(element))
    return taskList;
}
