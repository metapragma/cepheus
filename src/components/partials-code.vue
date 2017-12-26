<template>
  <div id="tests" style="margin: 5em;">
    <div id="case-one">
      <div id="l1" class="ba pre" style="width: 10rem; height: 10rem; margin: 4em;">
        function isNarrowableReference(expr: Expression): boolean {
            return expr.kind === SyntaxKind.Identifier ||
                expr.kind === SyntaxKind.ThisKeyword ||
                expr.kind === SyntaxKind.SuperKeyword ||
                expr.kind === SyntaxKind.PropertyAccessExpression && isNarrowableReference((|PropertyAccessExpression|expr).expression);
        }

        function isNarrowableReference(expr: Expression): boolean {
            return expr.kind === SyntaxKind.Identifier ||
                expr.kind === SyntaxKind.ThisKeyword ||
                expr.kind === SyntaxKind.SuperKeyword ||
                expr.kind === SyntaxKind.PropertyAccessExpression && isNarrowableReference((|PropertyAccessExpression|expr).expression);
        }
      </div>
    </div>  
  </div>
</template>
 
<style lang="scss">
@import '../styles/entrypoints/partials';
</style>
