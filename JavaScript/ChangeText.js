  const targetElementId = "p1";
  const textsToDisplay = ["Musician", "Software Engineer"];
  const intervalBetweenTexts = 2500;

  
  function periodicallyChangeText(targetElementId, texts, interval) {
    const targetElement = $(targetElementId);
    let currentIndex = 0;
    let loopCounter = 0;

    const timer = setInterval(function () {
      targetElement[0].textContent = texts[currentIndex];

      currentIndex++;
      if (currentIndex >= texts.length) {
        currentIndex = 0;
        loopCounter++;

        if (loopCounter === 4) {
          clearInterval(timer);
          targetElement[0].textContent = texts[texts.length - 1];
        }
      }
    }, interval);
  }

  periodicallyChangeText(targetElementId, textsToDisplay, intervalBetweenTexts);