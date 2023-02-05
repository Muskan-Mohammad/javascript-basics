function displayMenuItems(category) {
    const menuItem = foodItems [category];
    if (menuItem) {
      const selectedItemIndex = readline.keyInSelect(menuItem);
      const selectedItem = menuItem[selectedItemIndex];
  
      if (selectedItem) {
        console.log(chalk.bgRed(`Thanks for Buying ${selectedItem}`))
      } else {
        showNotSelectedMessage()
      }
    } else {
      showNotSelectedMessage()
    }
  }