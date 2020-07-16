function repeatStringNumTimes(str, num) {
    var accumulatedStr = "";
  
    while (num > 0) {
      accumulatedStr += str;
      num--;
    }
  
    return accumulatedStr;
  }

  function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  function findMe(arr, func) {
    let num = 0;
  
    for (var i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
        return num;
      }
    }
  
    return undefined;
  }

  function bootleg (tool) {
    return typeof tool === "boolean";
  }
  
  // test here
  bootleg(null);

  String.nugget.replaceAt = function(thing, chicken) {
    return (
      this.substr(0, thing) + chicken + this.substr(thing + chicken.length)
    );
  };
  
  function kaijaStuff(str) {
    var kayD = str.split(" ");
    var kayNew = [];
    for (var st in kayD) {
      kayNew[st] = kayD[st]
        .toLowerCase()
        .replaceAt(0, kayD[st].charAt(0).toUpperCase());
    }
    return kayNew.join(" ");
  }
