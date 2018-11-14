ViewControllers.Points = (function() {

    return {
        renderScoreBoard: function () {
            let areaElement = document.getElementById('area__points');

            //Leader Board
            let listGroup = areaElement.querySelector('.list-group');
            let members = ModelControllers.Members.getAll();
            let membersSorted = [];
            let inserted;
            for (let i = 0; i < members.length; i++) {
                inserted = false;
                for (let j = 0; j < membersSorted.length; j++) {
                    if (members[i].points.get() > membersSorted[j].points.get()) {
                        inserted = true;
                        membersSorted.splice(j, 0, members[i]);
                        break;
                    }
                }
                if (!inserted) {
                    membersSorted.push(members[i]);
                }
            }
        
            while (listGroup.firstChild) {
                listGroup.removeChild(listGroup.firstChild);
            }
            for (let i = 0; i < membersSorted.length; i++) {
                let button = document.createElement('button');
                button.classList.add('list-group-item', 'list-group-item-action');
                button.setAttribute('type', 'button');
                button.setAttribute('value', membersSorted[i].id.get());
                button.innerText = (i + 1) + '. '  + membersSorted[i].name.get() + ' poeng: ' + membersSorted[i].points.get();
                listGroup.appendChild(button);
            }

            //Progress bars
            let progressBarArea = areaElement.querySelector('div[name="area__points--progressbars"]');
            while(progressBarArea.firstChild) {
                progressBarArea.removeChild(progressBarArea.firstChild);
            }

            for (let i = 0; i < members.length; i++) {
                let divWrapper = document.createElement('div');
                divWrapper.classList.add('progress');
                let progressElement = document.createElement('div');
                progressElement.classList.add('progress-bar', 'progress-bar-striped');
                progressElement.setAttribute('role', 'progressbar');
                let pointString = members[i].points.get().toString();
                progressElement.style.width = pointString + '%';
                progressElement.setAttribute('aria-valuemin', '0');
                progressElement.setAttribute('aria-valuemax', '100');

                divWrapper.appendChild(progressElement);

                let nameSpan = document.createElement('span');
                nameSpan.innerText = members[i].name.get();

                progressBarArea.appendChild(nameSpan);
                progressBarArea.appendChild(divWrapper);
            }
        }
    }
})();