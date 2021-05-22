import {folders} from "./input.js"

const folderMap = new Map();
const topFolders = [];
for(let folder of folders) {
    folder.children = [];
    folder.hideChildrend = false;
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

refresh = () => {
    rootElement.innerHTML = "";
    addFolders(rootElement, topFolders);
}


addFolders = (parentElement, folders) => {
    if (!folders || folders.length <=0 ) return;

    const ulEle = document.createElement("ul");
    for (let folder of folders) {
        if (folder.isHidden) continue;
        const li = document.createElement("li");
        const nameTag = document.createTextNode(folder.name);
        nameTag.onclick = (e) => {
            e.target.hideChildrend = !e.target.hideChildrend;

        }
        li.appendChild(nameTag);
        if (!folder.hideChildrend) addFolders(li, folder.children);
        ulEle.appendChild(li);
    }
    parentElement.append(ulEle);
}
