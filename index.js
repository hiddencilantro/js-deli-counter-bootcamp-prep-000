function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  var updatedLine = [];
  for (let i=0; i<line.length; i++) {
    updatedLine.push(`${i+1}. ${line[i]}`)
  }
  return `The line is currently: ${updatedLine.join(', ')}`
}