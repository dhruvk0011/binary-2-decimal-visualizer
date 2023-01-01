const input = document.querySelector(".input");
const result = document.querySelector(".result");

const binToData = (binary) => {
  const bits = binary.split("");
  return bits.reverse().map((bit, position) => ({
    bit,
    position,
    value: bit * Math.pow(2, position),
  }));
};

const dataToHtml = (data) => {
  return data
    .map(
      (item) =>
        `<p>${item.bit} * 2 <sup>${item.position}</sup> = ${item.value}</p>`
    )
    .concat(`<p>Sum: ${data.map((x) => x.value).reduce((a, b) => a + b)}</p>`);
};

input.addEventListener("input", (event) => {
  result.innerHTML = "";

  const binary = event.target.value;
  if (/^[01]+$/.test(binary)) {
    const data = binToData(binary);
    const html = dataToHtml(data);
    html.forEach((item) => result.insertAdjacentHTML("beforeend", item));
  }
});
