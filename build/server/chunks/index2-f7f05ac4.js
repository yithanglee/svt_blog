function buildQueryString(data, parentKey = null) {
  return Object.keys(data).map((key) => {
    const nestedKey = parentKey ? `${parentKey}[${encodeURIComponent(key)}]` : encodeURIComponent(key);
    if (data[key] != null && typeof data[key] === "object" && !Array.isArray(data[key])) {
      return buildQueryString(data[key], nestedKey);
    } else if (data[key] == null) {
      return ``;
    } else {
      return `${nestedKey}=${encodeURIComponent(data[key])}`;
    }
  }).join("&");
}
async function genInputs(url, module) {
  let items = [];
  const apiData = {
    scope: "gen_inputs",
    module
  };
  const queryString = buildQueryString(apiData);
  const response = await fetch(url + `/api/webhook?${queryString}`, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (response.ok) {
    let dataList = await response.json();
    let keys = Object.keys(dataList);
    keys.sort((a, b) => {
      return a.localeCompare(b);
    });
    keys.forEach((v, i) => {
      items.push({ key: v, value: dataList[v] });
    });
    console.log(items);
    return items;
  } else {
    console.error("API request failed");
    return [];
  }
}

export { buildQueryString as b, genInputs as g };
//# sourceMappingURL=index2-f7f05ac4.js.map
