import { MyAuthService } from './my-auth.service';

describe('MyAuthService', () => {
  let service: MyAuthService;

  beforeEach(() => { (1)
    service = new MyAuthService();
  });

  afterEach(() => { (2)
    service = null;
    localStorage.removeItem('token');
  });
  it('should return true from MyAuth when there is a token', () => { (1)
    localStorage.setItem('token', '1234'); (2)
    expect(service.isAuthenticated()).toBeTruthy(); (3)
  });
  it('should return false from isAuthenticated when there is no token', () => {
    expect(service.isAuthenticated()).toBeFalsy();
  });
});
