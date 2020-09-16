function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  return function update() {
    console.log(`Currently serving ${katzDeliLine[0]}`);
    katzDeliLine.shift();
  }
}