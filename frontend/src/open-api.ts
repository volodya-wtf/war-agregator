/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: operations["AppController_getHello"];
  };
  "/gallery": {
    get: operations["AppController_getGallery"];
  };
}

export interface components {
  schemas: {
    ImageDto: {
      /**
       * Format: date-time
       * @description Date of publication as ISO string
       */
      timestamp: string;
      originalImgUrl: string;
      galleryImgUrl?: string;
      thumbnailImgUrl?: string;
      source: string;
      title?: string;
      description?: string;
    };
    ErrorDto: {
      /** @description HTTP Status Code */
      statusCode: number;
      message: string;
    };
  };
}

export interface operations {
  AppController_getHello: {
    parameters: {};
    responses: {
      200: {
        content: {
          "application/json": string;
        };
      };
    };
  };
  AppController_getGallery: {
    parameters: {
      query: {
        /** Time until which images should be fetched. Number of ms since the 1st of Jan 1970. Default is now. */
        from?: number;
        /** Max number of images that should be fetched. Default 32. */
        limit?: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ImageDto"][];
        };
      };
      /** Not images found */
      404: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
}

export interface external {}
