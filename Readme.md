1. JS History?
sol: Initially Javascript was functioning as a scripting language but later because of it's   popularity it became programming language.
. Founder of JS is Brenden Eich.
  Before 1990 Netscape and Microsoft were the using their own version of JS.
. But after W3c came in between and standardize the JS with ECMA(Europian computer manufacture   association) 
. All browser uses their own JS engine like Chrome uses V8 engine, safari uses their own and microsoft uses their own engine called Chakra.

. More or less all browser's engine uses same JS based on ECMA guidelines or syntaxes or rules.
.It is basically a interpretter not a compiler.
 
. It interpretes the JS code into machine readable code.


2. How JS works?
sol: JS runs on client means on browser using engine like V8 or chakra.

Step1: The script gets loaded as UTF-16 byte stream from  either
           1. Network
           2. Cache
           3. worker   -> passed to a byte stream decoder

Step2: The byte stream decoder decodes the bytes into tokens.

Step3: The tokens are sent to the parser.


Step4: It uses two types of parser i.e. 
        1. pre-parser: pre-parser ow jo unnecessary code jo meaningful nahi hai like commented code or empty func variable and so on usko parse karega.
        
        2. parser: meaningful code gets paresed using parser.
                  parser generates nodes based on tokens and creates AST.

Step5: After parsing it creates a DOM like tree called AST(Abstract Syntax Tree).

         AST
         |
         Program
         |
         FunctionLiteral
         |
         ReturnStatement
         |
         StringLiteral
         |


Step6: with the help of AST It generates the byte code that is understandable by m/c(machine).

so the whole process is called interpreter.

Step7: The interpreter walk through the AST and generates the byte code.


NOTE: JS is dynamic typed language.

Step8: The byte code and type feedback are sent to  optimzing compiler, which generates highly 
        optimized machine code.