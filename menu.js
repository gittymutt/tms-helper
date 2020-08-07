document.addEventListener('DOMContentLoaded', function() {
  var makePresentButton = document.getElementById('make-present');

  makePresentButton.addEventListener('click', function() {
    chrome.tabs.executeScript({ code: `(${ inContent })()` });
    function inContent() {
      Array.from(document.querySelectorAll('[name*="lstAttendAbsent"]')).map((el)=>{ if (!el.disabled) {el.selectedIndex=2}});
    }
  });

  var assignButton = document.getElementById('campus-assign');

  assignButton.addEventListener('click', function() {
    chrome.tabs.executeScript({ code: `(${ inContent })()` });
    function inContent() {
      Array.from(document.querySelectorAll('[name*="dTutorialCampus"]')).map((el)=>{ if (!el.disabled) {el.selectedIndex=2}});
      Array.from(document.querySelectorAll('[name*="dAssign"]')).map((el)=>{ if (!el.disabled) {el.selectedIndex=2}})
    }
  }, false);
}, false);
