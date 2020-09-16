function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    katzDeliLine[0];
    katzDeliLine.shift();
  } else {
    console.log("There is nobody waiting to be served!")
  }
}