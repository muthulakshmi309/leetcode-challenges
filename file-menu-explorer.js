const backendData = [{
        id: "1",
        name: "File1"
    },
    {
        id: "2",
        name: "New Employee Onboarding",
        children: [{
                id: "8",
                name: "Onboarding Materials"
            },
            {
                id: "9",
                name: "Training",
            }
        ]
    },
    {
        id: "3",
        name: "Office Events",
        comment: "Test test test",
        children: [{
                id: "6",
                name: "2018",
                comment: "Test test test1",
                children: [{
                        id: "10",
                        name: "Summer Picnic",
                    },
                    {
                        id: "11",
                        name: "Valentine's Day Party",
                    },
                    {
                        id: "12",
                        name: "New Year's Party",
                    }
                ]
            },
            {
                id: "7",
                name: "2017",

                children: [{
                    id: "13",
                    name: "Company Anniversary Celebration",

                }]
            }
        ]
    },
    {
        id: "4",
        name: "Public Holidays",
    },
    {
        id: "5",
        name: "Vacations and Sick Leaves",
    }
];

function renderFileExplorer(backendData, appendToElem) {
    let ulElement = document.createElement('ul');

    backendData.map(data => {
        let menuItem = renderMenuItem(data);
        ulElement.appendChild(menuItem);

        if (data.children) {
            renderFileExplorer(data.children, menuItem);
        }
    });
    appendToElem.appendChild(ulElement);
}

function renderMenuItem(menuData) {
    let liElem = document.createElement('li');
    liElem.style = "list-style: none";
    let liElemContainer = document.createElement('div');
    liElemContainer.style = "display: flex; margin-bottom: 10px;";
    liElemContainer.innerHTML = `<i style="padding-right: 10px" class="${menuData.children ? 'fa  fa-folder-open-o' : 'fa fa-file-o'}"></i><div>${menuData.name}</div>`;

    liElem.appendChild(liElemContainer);

    return liElem;
}

renderFileExplorer(backendData, document.body);