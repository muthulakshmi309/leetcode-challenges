const backendData = [{
        id: "1",
        name: "A",
        comment: "looks good"
    },
    {
        id: "2",
        name: "New Employee Onboarding",
        comment: "test comment",
        children: [{
                id: "8",
                name: "Onboarding Materials",
                comment: "Test test test",
            },
            {
                id: "9",
                name: "Training",
                comment: "Test test test",
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
                        comment: "Test test test",
                    },
                    {
                        id: "11",
                        name: "Valentine's Day Party",
                        comment: "Test test test",
                    },
                    {
                        id: "12",
                        name: "New Year's Party",
                        comment: "Test test test",
                    }
                ]
            },
            {
                id: "7",
                name: "2017",
                comment: "Test test test",
                children: [{
                    id: "13",
                    name: "Company Anniversary Celebration",
                    comment: "Test test test",
                }]
            }
        ]
    },
    {
        id: "4",
        name: "Public Holidays",
        comment: "Test test test",
    },
    {
        id: "5",
        name: "Vacations and Sick Leaves",
        comment: "Test test test",
    }
];

function renderNestedComments(backendData, parentElem) {
    let ulElem = document.createElement('ul');
    backendData.map((data) => {
        console.log(data);
        let commentElem = renderComment(data);
        ulElem.appendChild(commentElem);
        parentElem.appendChild(ulElem);
    });
}

function renderComment(data) {
    let commentElem = document.createElement('li');
    let commentContainer = document.createElement('div');

    commentElem.classList.add('comment-container');
    let usernameElem = document.createElement('div');
    usernameElem.classList.add('user-name');
    usernameElem.textContent = data.name;

    let textElem = document.createElement('div');
    textElem.classList.add('comment-text');
    textElem.textContent = data.comment;
    commentContainer.appendChild(usernameElem);
    commentContainer.appendChild(textElem);

    commentElem.appendChild(commentContainer);

    //commentContainer.innerHTML = '<div>' + commentElem.innerHTML + '</div>'
    if (data.children) {
        renderNestedComments(data.children, commentContainer);
    }
    return commentElem;
}

renderNestedComments(backendData, document.body);