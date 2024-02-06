import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch users from the server', () => {
    service.getUsers().subscribe((users: any[]) => {
      expect(users.length).toBeGreaterThan(0);
    });
  });

  // Add more tests for other DataService functions if needed
});
