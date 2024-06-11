import { UnsplashService } from './UnsplashService';

describe('UnsplashService', () => {
  let service: UnsplashService;
  let mockSetLoader: jest.Mock;
  let mockRemoveLoader: jest.Mock;
  let mockStartSearching: jest.Mock;
  let mockGetPictures: jest.Mock;

  beforeEach(() => {
    service = new UnsplashService();
    mockSetLoader = jest.fn();
    mockRemoveLoader = jest.fn();
    mockStartSearching = jest.fn();
    mockGetPictures = jest.fn();
  });

  describe('getPhotos', () => {
    it('should call setLoader, removeLoader, startSearching, and getPictures with results', async () => {
      const mockResult = [{ picture: 'url1', pictureFull: 'url2', alt_description: 'desc' }];
      jest.spyOn(service, 'getRequest').mockResolvedValue(mockResult);

      await service.getPhotos('flowers', mockGetPictures, mockSetLoader, mockRemoveLoader, mockStartSearching);

      expect(mockSetLoader).toHaveBeenCalled();
      expect(service.getRequest).toHaveBeenCalledWith('flowers', 1);
      expect(mockGetPictures).toHaveBeenCalledWith(mockResult);
      expect(mockRemoveLoader).toHaveBeenCalled();
      expect(mockStartSearching).toHaveBeenCalled();
    });
  });

  describe('getMorePhotos', () => {
    it('should call getPictures with results', async () => {
      const mockResult = [{ picture: 'url1', pictureFull: 'url2', alt_description: 'desc' }];
      jest.spyOn(service, 'getRequest').mockResolvedValue(mockResult);

      await service.getMorePhotos('flowers', 2, mockGetPictures);

      expect(service.getRequest).toHaveBeenCalledWith('flowers', 2);
      expect(mockGetPictures).toHaveBeenCalledWith(mockResult);
    });
  });
});