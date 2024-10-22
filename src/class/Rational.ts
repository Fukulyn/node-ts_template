/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
export class Rational {
        private numerator: number;
        private denominator: number;
      
        // 構造函數，接受分子和分母
        constructor(numerator: number, denominator: number) {
          if (denominator === 0) {
            throw new Error("Denominator cannot be zero.");
          }
          const gcd = this.gcd(numerator, denominator);
          this.numerator = numerator / gcd;
          this.denominator = denominator / gcd;
        }
      
        // Getter 方法
        getNumerator(): number {
          return this.numerator;
        }
      
        getDenominator(): number {
          return this.denominator;
        }
      
        // 正規化方法，返回一個新的 Rational 物件，將分數簡化
        normalize(): Rational {
          const gcd = this.gcd(this.numerator, this.denominator);
          return new Rational(this.numerator / gcd, this.denominator / gcd);
        }
      
        // 判斷是否是整數
        isWhole(): boolean {
          return this.numerator % this.denominator === 0;
        }
      
        // 判斷是否為小數
        isDecimal(): boolean {
          return !this.isWhole();
        }
      
        // 比較兩個 Rational 是否相等（分子分母都相等）
        equals(numerator: number, denominator: number): boolean {
          const r = new Rational(numerator, denominator).normalize();
          const current = this.normalize();
          return current.numerator === r.getNumerator() && current.denominator === r.getDenominator();
        }
      
        equalsRational(r: Rational): boolean {
          return this.equals(r.getNumerator(), r.getDenominator());
        }
      
        // 靜態方法：將字元陣列轉換為 Rational
        static parseRational(chars1: string[], chars2: string[]): Rational {
          const numerator = parseInt(chars1.join(''));
          const denominator = parseInt(chars2.join(''));
          return new Rational(numerator, denominator);
        }
      
        // 靜態方法：將包含分數的字串轉換為 Rational
        static parseRationalString(rationalString: string): Rational {
          const parts = rationalString.split('/');
          const numerator = parseInt(parts[0]);
          const denominator = parseInt(parts[1]);
          return new Rational(numerator, denominator);
        }
      
        // 計算最大公約數（GCD）
        private gcd(a: number, b: number): number {
          if (b === 0) {
            return a;
          }
          return this.gcd(b, a % b);
        }
      }
      