import { CalculatorServiceService } from './calculator-service.service';

describe('CalculatorServiceService simple test', () => {
  let service: CalculatorServiceService;
 
  beforeEach(() => {
    service = new CalculatorServiceService();
    console.log('creation...');
  });
 
  describe('add', () => {
    it('should return correct answer', () => {
      const result = service.add(4, 2);
 
      expect(result).toBe(6);
    }); 
  });
 
  describe('lowerOrZero', () => {
    it('Should answer 0 for null', () => {
      const result = service.lowerOrZero(null);
      expect(result).toBe(0);
    });
 
    it('Should answer correct answer', () => {
      const result = service.lowerOrZero([2, 1, 3]);
      expect(result).toBe(1);
    });
 
    it('Should answer 0 if negative', () => {
      const result = service.lowerOrZero([2, 1, -3]);
      expect(result).toBe(0);
    });
  });
});