export default defineEventHandler((event) => {
    // Для отладки можно добавить логирование метода запроса:
    console.log("Запрос на /api/wix методом:", event.req.method);
  
    // Тестовый JSON с данными товаров
    const response = {
      "products": [
        {
          "id": "f868fa7a-69eb-7cd4-15c2-d0fa4a6517cc",
          "name": "CarbonNurtureBD 4m 3ft x 2700ft",
          "slug": "carbonnurturebd-4m-3ft-x-2700ft",
          "visible": true,
          "productType": "physical",
          "description": "<p>our products are fully biodegradable and while degradeding it feeds the microbes in the soil and adds carbon and trace minerals to your soil leaving behind zero microplastics. The BD4m film starts degrading at 4months and will be completly degraded by end of second season unlike other products on the market that take many years to break down. our films install the same as conventional plastics and better than other bio degradable products on the market, no worries of tearing or ripping or a weak film to begin with. our film will hold back your unwanted weeds and boost yeilds on your crops growing in it and no need to remove at end of season saving farmers time and money, while helping reduce our global waste problem.</p>",
          "sku": "",
          "weight": 0.0,
          "weightRange": { "minValue": 0.0, "maxValue": 0.0 },
          "stock": { "trackInventory": true, "quantity": 0, "inStock": false, "inventoryStatus": "OUT_OF_STOCK" },
          "price": {
            "currency": "USD",
            "price": 175.0,
            "discountedPrice": 175.0,
            "formatted": { "price": "$175.00", "discountedPrice": "$175.00" }
          },
          "priceData": {
            "currency": "USD",
            "price": 175.0,
            "discountedPrice": 175.0,
            "formatted": { "price": "$175.00", "discountedPrice": "$175.00" }
          },
          "convertedPriceData": {
            "currency": "USD",
            "price": 175.0,
            "discountedPrice": 175.0,
            "formatted": { "price": "$175.00", "discountedPrice": "$175.00" }
          },
          "priceRange": { "minValue": 175.0, "maxValue": 175.0 },
          "costRange": { "minValue": 100.0, "maxValue": 100.0 },
          "additionalInfoSections": [],
          "ribbons": [ { "text": "preorder" } ],
          "media": {
            "mainMedia": {
              "thumbnail": {
                "url": "https://static.wixstatic.com/media/e3ce29_95719fd5edb443e6ba0bbe2206b871fb~mv2.jpg/v1/fit/w_50,h_50,q_90/file.jpg",
                "width": 50,
                "height": 50
              },
              "mediaType": "image",
              "title": "IMG_20200526_201504.jpg",
              "image": {
                "url": "https://static.wixstatic.com/media/e3ce29_95719fd5edb443e6ba0bbe2206b871fb~mv2.jpg/v1/fit/w_4032,h_3024,q_90/file.jpg",
                "width": 4032,
                "height": 3024
              },
              "id": "e3ce29_95719fd5edb443e6ba0bbe2206b871fb~mv2.jpg"
            },
            "items": [
              {
                "thumbnail": {
                  "url": "https://static.wixstatic.com/media/e3ce29_95719fd5edb443e6ba0bbe2206b871fb~mv2.jpg/v1/fit/w_50,h_50,q_90/file.jpg",
                  "width": 50,
                  "height": 50
                },
                "mediaType": "image",
                "title": "IMG_20200526_201504.jpg",
                "image": {
                  "url": "https://static.wixstatic.com/media/e3ce29_95719fd5edb443e6ba0bbe2206b871fb~mv2.jpg/v1/fit/w_4032,h_3024,q_90/file.jpg",
                  "width": 4032,
                  "height": 3024
                },
                "id": "e3ce29_95719fd5edb443e6ba0bbe2206b871fb~mv2.jpg"
              }
            ]
          },
          "customTextFields": [],
          "manageVariants": false,
          "productOptions": [],
          "productPageUrl": { "base": "https://shop.carbonnurture.com/", "path": "/product-page/carbonnurturebd-4m-3ft-x-2700ft" },
          "numericId": "1737671045264000",
          "inventoryItemId": "07970585-9614-832b-ea3d-2f05b59ae833",
          "discount": { "type": "NONE", "value": 0.0 },
          "collectionIds": ["00000000-000000-000000-000000000001"],
          "variants": [],
          "lastUpdated": "2025-01-28T17:44:50.976Z",
          "createdDate": "2025-01-23T22:24:05.264Z",
          "ribbon": "preorder",
          "exportProductId": "product_f868fa7a-69eb-7cd4-15c2-d0fa4a6517cc"
        },
        {
          "id": "863853d0-7274-596e-85da-14818d9ad3d7",
          "name": "CarbonNurtureBD 6m 2700' x 4'",
          "slug": "carbonnurturebd-6m-2700-x-4",
          "visible": true,
          "productType": "physical",
          "description": "<p>our products are fully biodegradable and while degradeding it feeds the microbes in the soil, adds carbon and trace minerals to your soil. leaving behind zero microplastics in the proccess. The BD6m film starts degrading at 6months and will be completly degraded by end of second season unlike other products on the market that take many years to break down. our films install the same as conventional plastics and better than other bio degradable products on the market, no worries of tearing or ripping or a weak film to begin with. our film will hold back your unwanted weeds and boost yeilds on your crops growing in it and no need to remove at end of season saving farmers time and money, while helping reduce our global waste problem.</p><p>For wholesale information on large orders please contact our sales manager @jkincade@carbonnurture.com or call</p>",
          "sku": "",
          "weight": 49.0,
          "weightRange": { "minValue": 49.0, "maxValue": 49.0 },
          "stock": { "trackInventory": true, "quantity": 19, "inStock": true, "inventoryStatus": "IN_STOCK" },
          "price": {
            "currency": "USD",
            "price": 245.0,
            "discountedPrice": 245.0,
            "formatted": { "price": "$245.00", "discountedPrice": "$245.00" }
          },
          "priceData": {
            "currency": "USD",
            "price": 245.0,
            "discountedPrice": 245.0,
            "formatted": { "price": "$245.00", "discountedPrice": "$245.00" }
          },
          "convertedPriceData": {
            "currency": "USD",
            "price": 245.0,
            "discountedPrice": 245.0,
            "formatted": { "price": "$245.00", "discountedPrice": "$245.00" }
          },
          "priceRange": { "minValue": 245.0, "maxValue": 245.0 },
          "costRange": { "minValue": 0.0, "maxValue": 0.0 },
          "additionalInfoSections": [],
          "ribbons": [ { "text": "Made in USA" } ],
          "media": {
            "mainMedia": {
              "thumbnail": {
                "url": "https://static.wixstatic.com/media/e3ce29_17c0939a88874b5aaadc771c7a315889~mv2.jpg/v1/fit/w_50,h_50,q_90/file.jpg",
                "width": 50,
                "height": 50
              },
              "mediaType": "image",
              "title": "IMG_20200526_201504_edited.jpg",
              "image": {
                "url": "https://static.wixstatic.com/media/e3ce29_17c0939a88874b5aaadc771c7a315889~mv2.jpg/v1/fit/w_2406,h_2250,q_90/file.jpg",
                "width": 2406,
                "height": 2250
              },
              "id": "e3ce29_17c0939a88874b5aaadc771c7a315889~mv2.jpg"
            },
            "items": [
              {
                "thumbnail": {
                  "url": "https://static.wixstatic.com/media/e3ce29_17c0939a88874b5aaadc771c7a315889~mv2.jpg/v1/fit/w_50,h_50,q_90/file.jpg",
                  "width": 50,
                  "height": 50
                },
                "mediaType": "image",
                "title": "IMG_20200526_201504_edited.jpg",
                "image": {
                  "url": "https://static.wixstatic.com/media/e3ce29_17c0939a88874b5aaadc771c7a315889~mv2.jpg/v1/fit/w_2406,h_2250,q_90/file.jpg",
                  "width": 2406,
                  "height": 2250
                },
                "id": "e3ce29_17c0939a88874b5aaadc771c7a315889~mv2.jpg"
              }
            ]
          },
          "customTextFields": [],
          "manageVariants": false,
          "productOptions": [],
          "productPageUrl": { "base": "https://shop.carbonnurture.com/", "path": "/product-page/carbonnurturebd-6m-2700-x-4" },
          "numericId": "1737572017788000",
          "inventoryItemId": "79c7ac2f-8d8b-a691-7a25-eb7e72652c28",
          "discount": { "type": "NONE", "value": 0.0 },
          "collectionIds": ["00000000-000000-000000-000000000001"],
          "variants": [],
          "lastUpdated": "2025-01-30T16:43:21.256Z",
          "createdDate": "2025-01-22T18:53:37.788Z",
          "ribbon": "Made in USA",
          "exportProductId": "product_863853d0-7274-596e-85da-14818d9ad3d7"
        },
        {
          "id": "df19c1f7-07d8-a265-42f8-e8dfa824cc6e",
          "name": "CarbonNurtureBD 4 month 4'x2700'",
          "slug": "carbonnurturebd-4-month-4-x2700",
          "visible": true,
          "productType": "physical",
          "description": "<p>our products are fully biodegradable and while degradeding it feeds the microbes in the soil, adds carbon and trace minerals to your soil leaving behind zero microplastics. The BD4m film starts degrading at 4months and will be completly degraded by end of second season unlike other products on the market that take many years to break down. our films install the same as conventional plastics and better than other bio degradable products on the market, no worries of tearing or ripping or a weak film to begin with. our film will hold back your unwanted weeds and boost yeilds on your crops growing in it and no need to remove at end of season saving farmers time and money, while helping reduce our global waste problem.</p>",
          "sku": "",
          "weight": 49.0,
          "weightRange": { "minValue": 49.0, "maxValue": 49.0 },
          "stock": { "trackInventory": true, "quantity": 20, "inStock": true, "inventoryStatus": "IN_STOCK" },
          "price": {
            "currency": "USD",
            "price": 225.0,
            "discountedPrice": 225.0,
            "formatted": { "price": "$225.00", "discountedPrice": "$225.00" }
          },
          "priceData": {
            "currency": "USD",
            "price": 225.0,
            "discountedPrice": 225.0,
            "formatted": { "price": "$225.00", "discountedPrice": "$225.00" }
          },
          "convertedPriceData": {
            "currency": "USD",
            "price": 225.0,
            "discountedPrice": 225.0,
            "formatted": { "price": "$225.00", "discountedPrice": "$225.00" }
          },
          "priceRange": { "minValue": 225.0, "maxValue": 225.0 },
          "costRange": { "minValue": 160.0, "maxValue": 160.0 },
          "additionalInfoSections": [
            {
              "title": "PRODUCT INFO",
              "description": "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item."
            },
            {
              "title": "RETURN & REFUND POLICY",
              "description": "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence."
            },
            {
              "title": "SHIPPING INFO",
              "description": "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence."
            }
          ],
          "ribbons": [ { "text": "Made in USA" } ],
          "media": {
            "mainMedia": {
              "thumbnail": {
                "url": "https://static.wixstatic.com/media/e3ce29_0e79ee00f8af459ca0f2be2327f1aba9~mv2.jpg/v1/fit/w_50,h_50,q_90/file.jpg",
                "width": 50,
                "height": 50
              },
              "mediaType": "image",
              "title": "IMG_20200526_201504_edited.jpg",
              "image": {
                "url": "https://static.wixstatic.com/media/e3ce29_0e79ee00f8af459ca0f2be2327f1aba9~mv2.jpg/v1/fit/w_2299,h_2250,q_90/file.jpg",
                "width": 2299,
                "height": 2250
              },
              "id": "e3ce29_0e79ee00f8af459ca0f2be2327f1aba9~mv2.jpg"
            },
            "items": [
              {
                "thumbnail": {
                  "url": "https://static.wixstatic.com/media/e3ce29_0e79ee00f8af459ca0f2be2327f1aba9~mv2.jpg/v1/fit/w_50,h_50,q_90/file.jpg",
                  "width": 50,
                  "height": 50
                },
                "mediaType": "image",
                "title": "IMG_20200526_201504_edited.jpg",
                "image": {
                  "url": "https://static.wixstatic.com/media/e3ce29_0e79ee00f8af459ca0f2be2327f1aba9~mv2.jpg/v1/fit/w_2299,h_2250,q_90/file.jpg",
                  "width": 2299,
                  "height": 2250
                },
                "id": "e3ce29_0e79ee00f8af459ca0f2be2327f1aba9~mv2.jpg"
              }
            ]
          },
          "customTextFields": [],
          "manageVariants": false,
          "productOptions": [],
          "productPageUrl": { "base": "https://shop.carbonnurture.com/", "path": "/product-page/carbonnurturebd-4-month-4-x2700" },
          "numericId": "1462356045882000",
          "inventoryItemId": "20e63e08-f827-5d9a-bd07-172057db3391",
          "discount": { "type": "NONE", "value": 0.0 },
          "collectionIds": ["00000000-000000-000000-000000000001"],
          "variants": [],
          "lastUpdated": "2025-01-29T17:17:21.882Z",
          "createdDate": "2016-05-04T10:00:45.882Z",
          "ribbon": "Made in USA",
          "exportProductId": "product_df19c1f7-07d8-a265-42f8-e8dfa824cc6e"
        }
      ],
      "metadata": { "items": 100, "offset": 0 },
      "totalResults": 3
    };
  
    return response;
  });
  