window.onload = function() {
    const list = document.getElementById('Top5');
    const inp = document.getElementById('inp');
    const btn = document.getElementById('btn');
    list.innerHTML = '';

    const myHistory = [];
    const MAX_HISTORY = 5;

    btn.onclick = () => {
    // we will only allow a term to be entered if the search input isn't empty
      if (inp.value !== '') {
              // empty the list so that we don't display duplicate entries
              // the display is regenerated every time a search term is entered.
              myHistory.push(inp.value);

              const myHistoryCopy = myHistory.slice().sort((a, b) => a.length - b.length);
              list.innerHTML = '';
              for (const itemText of myHistoryCopy) {
                  const listItem = document.createElement('li');
                  listItem.textContent = itemText;
                  list.appendChild(listItem);
              }
              if (myHistory.length >= MAX_HISTORY) {
                  myHistory.shift();
              }

              // empty the search input and focus it, ready for the next term to be entered
              inp.value = '';
              btn.focus();
          }
    }
}