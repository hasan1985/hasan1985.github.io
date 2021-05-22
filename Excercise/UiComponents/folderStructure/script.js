import {folders} from "./input.js"

const folderMap = new Map();
const topFolders = [];
for(let folder of folders) {
    folder.children = [];
    folder.childrenCollapsed = false;
    folderMap.set(folder.id, folder);
}

for(let folder of folders) {
    if (folderMap.has(folder.parent)) {
        folderMap.get(folder.parent).children.push(folder);
    } else {
        topFolders.push(folder);
    }
}

const rootElement = document.getElementById("folders");
addFolders(rootElement, topFolders);

function addFolders(parentElement, folders) {
    if (!folders || folders.length <= 0 ) return;

    const ulEle = document.createElement("ul");
    for (let folder of folders) {
        const li = document.createElement("li");
        const nameTag = document.createTextNode(folder.name);
        li.appendChild(nameTag);
        li.onclick = (e) => {
            e.stopPropagation();
            if (folder.children.length > 0) {
                if (!folder.childrenCollapsed) {
                    li.querySelector("ul").remove();
                    folder.childrenCollapsed = true;
                } else {
                    addFolders(li, folder.children);
                    folder.childrenCollapsed = false;
                }
            }
        }
        if (!folder.childrenCollapsed) {
            addFolders(li, folder.children);
        }
        ulEle.appendChild(li);
    }
    parentElement.append(ulEle);
}
