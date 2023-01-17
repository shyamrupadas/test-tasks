/*
 Make this test passed.
 The console output of this code should be:
 'testPassed:  true'

 Implement class RemoveComments (see below).
 The code should remove all comments from the inputData.

 Allowed:
    1. Create any internal class variables
    2. Create any internal methods

 Disallowed:
    1. Change class interface (putChar)
    2. Change any code outside of class RemoveComments
*/

const inputData =
  "/* comment to be removed */\n"
  + "function some() {\n"
  + "// some comments\n"
  + "int a = 1;\n"
  + "int b = 2;// comment\n"
  + "/* a + b */\n"
  + "return a + b;\n"
  + "}\n"
  + "////*** some more comment\n"

const expectedOutput =
  "\n" +
  "function some() {\n" +
  "int a = 1;\n" +
  "int b = 2;\n" +
  "return a + b;\n" +
  "}\n"


// implement this class
class RemoveComments {
  constructor() {
  }

  state = 'normal'

  putChar(c) {
    if (this.state === 'normal' && c === '/') {
      this.state = 'comment'
      return ''
    }

    if (this.state === 'comment' && c === '\n') {
      this.state = 'normal'
      return ''
    }

    if (this.state === 'comment' && c === '*') {
      this.state = 'multilineComment'
      return ''
    }

    if (this.state === 'multilineComment' && c === '*') {
      this.state = 'endMultilineComment'
      return ''
    }

    if (this.state === 'endMultilineComment' && c === '/') {
      this.state = 'normal'
      return ''
    }

    if (this.state !== 'normal') {
      return ''
    }

    return c
  }
}

function removeComments(input) {
  const filter = new RemoveComments()

  let out = ""
  for (const c of input) {
    out += filter.putChar(c)
  }

  return out
}


const outputData = removeComments(inputData)

const testPassed = expectedOutput === outputData
console.log("testPassed: ", testPassed)
