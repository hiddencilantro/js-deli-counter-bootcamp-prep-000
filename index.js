function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  return if (katzDeliLine.length > 0) {
    console.log(`Currently serving ${katzDeliLine[0]}.`);
    katzDeliLine.shift();
  } else {
    console.log("There is nobody waiting to be served!")
  }
}