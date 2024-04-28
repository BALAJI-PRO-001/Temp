export default class UserInterface {

  BORDER_1PX_RED = "1px solid red";
  BORDER_1PX_TRANSPARENT = "1px solid transparent";

  setIcon(imgElement, oldImgPath, newImgPath) {
    if (imgElement) {
      if (imgElement.src.match(oldImgPath)) 
        imgElement.src = newImgPath;
      else 
        imgElement.src = oldImgPath;
    } else {
      throw new Error("Given img element is null ...");
    }
  }

  setBorder(element, style) {
    if (element) {
      element.style.border = style;
    }
    else {
      throw new Error("Given element is null ...");
    }
  }


  setMessage(element, message) {
    if (element) {
      element.innerHTML = message;
    } else {
      throw new Error("Given element is null ...");
    }
  }


  createTable(columnNames, data, options) {
    if (data) {
      const table = document.createElement("table");
      const tr = document.createElement("tr");

      for (let columnName of columnNames) {
        const th = document.createElement("th");
        th.innerText = columnName;
        tr.appendChild(th);
      }
      table.appendChild(tr);

      for (let i = 0; i < data.length; i++) {
        const tr = document.createElement("tr");
        for (let key of Object.keys(data[i])) {
          // This code use for skip password field 
          if (key == "password") continue;

          const td = document.createElement("td");
          td.innerText = data[i][key];
          tr.appendChild(td);
        }
        
        for (let option of options) {
          const td = document.createElement("td");
          td.innerHTML = option;
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }

      return table;
    } else {
      throw new Error("Given data is empty or null ....");
    }
  }

}