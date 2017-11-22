import {Injectable} from '@angular/core';

@Injectable()
export class SpotifyMockService {
  mockAlbums: any;

  constructor() {
    this.mockAlbums = {
      "albums": {
        "href": "https://api.spotify.com/v1/search?query=acdc&type=album&market=PL&offset=0&limit=20",
        "items": [{
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }],
          "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6mUdeDZCsExyJLMdAfDuwh"
          },
          "href": "https://api.spotify.com/v1/albums/6mUdeDZCsExyJLMdAfDuwh",
          "id": "6mUdeDZCsExyJLMdAfDuwh",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/52d83377fe9d7fc838deeb859499f3973adf903f",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/b7b31914e0c4951249fad37271248212c8ac3025",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/184dd6719f7c5317a08505d4d67795583adfb392",
            "width": 64
          }],
          "name": "Back In Black",
          "type": "album",
          "uri": "spotify:album:6mUdeDZCsExyJLMdAfDuwh"
        }, {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }],
          "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/10v912xgTZbjAtYfyKWJCS"
          },
          "href": "https://api.spotify.com/v1/albums/10v912xgTZbjAtYfyKWJCS",
          "id": "10v912xgTZbjAtYfyKWJCS",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/6db774767e7a5b5b4b5b7c74ac61a24ae4cd9730",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/d07f49e9e0900414d625d855b8341d5f351743c5",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/f45740d5b487c777f4611f1a73f2054ff9d54c81",
            "width": 64
          }],
          "name": "Highway to Hell",
          "type": "album",
          "uri": "spotify:album:10v912xgTZbjAtYfyKWJCS"
        }, {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }],
          "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/19AUoKWRAaQYrggVvdQnqq"
          },
          "href": "https://api.spotify.com/v1/albums/19AUoKWRAaQYrggVvdQnqq",
          "id": "19AUoKWRAaQYrggVvdQnqq",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/d60d7c9a2cfe0b5b0ec254bf4f2e6397baa36148",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/9c9dd881b1350bd7ffa4510c692ea2f401b3be9b",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/97ec47f61993702de195ec89f335245fdbef9892",
            "width": 64
          }],
          "name": "High Voltage",
          "type": "album",
          "uri": "spotify:album:19AUoKWRAaQYrggVvdQnqq"
        }, {
          "album_type": "compilation",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }],
          "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4ydl8Ci7OsndhI2ALnrpIv"
          },
          "href": "https://api.spotify.com/v1/albums/4ydl8Ci7OsndhI2ALnrpIv",
          "id": "4ydl8Ci7OsndhI2ALnrpIv",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/a6d307979309bfc1b8ba9ca64aeae4dc9f51f1ce",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/fed88d1739d842a4b706594ed2af44720634fdd3",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/9b3cc150a0fea3e7fdeb1c18253df9570046ca09",
            "width": 64
          }],
          "name": "Iron Man 2",
          "type": "album",
          "uri": "spotify:album:4ydl8Ci7OsndhI2ALnrpIv"
        }, {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }],
          "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4vu7F6h90Br1ZtYYaqfITy"
          },
          "href": "https://api.spotify.com/v1/albums/4vu7F6h90Br1ZtYYaqfITy",
          "id": "4vu7F6h90Br1ZtYYaqfITy",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/b48aed6518256335ebb92ef79ce9d52ac6b2955b",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/25353d0db917a2e40616425b3adeba891205ddd0",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/99c7ac13d93b5959777cc7191b40faf91e597158",
            "width": 64
          }],
          "name": "The Razors Edge",
          "type": "album",
          "uri": "spotify:album:4vu7F6h90Br1ZtYYaqfITy"
        }, {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }],
          "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6OwvO40ahugJE5PH4TjqTg"
          },
          "href": "https://api.spotify.com/v1/albums/6OwvO40ahugJE5PH4TjqTg",
          "id": "6OwvO40ahugJE5PH4TjqTg",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/16f72167c03371e0d30dc71c61e94378f5294cf6",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/52c14c214d58e2931a7333f2075978cc8f98d061",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/e15ab621dcfb46382c7abbf25d919df3db786a35",
            "width": 64
          }],
          "name": "Rock or Bust",
          "type": "album",
          "uri": "spotify:album:6OwvO40ahugJE5PH4TjqTg"
        }, {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }],
          "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/07EFoHHspqSwsmkbnWaB4A"
          },
          "href": "https://api.spotify.com/v1/albums/07EFoHHspqSwsmkbnWaB4A",
          "id": "07EFoHHspqSwsmkbnWaB4A",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/3b1f17f0694f9c3ddc8e126582123ea8a3f384d1",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/36586353b485930089abd084e670f4cfb79be38c",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/c7002406e8913cfb9d75a826008c4d99e06ab67b",
            "width": 64
          }],
          "name": "Who Made Who",
          "type": "album",
          "uri": "spotify:album:07EFoHHspqSwsmkbnWaB4A"
        }, {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }],
          "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7qVfz4UGONwEd5nQjj0ESN"
          },
          "href": "https://api.spotify.com/v1/albums/7qVfz4UGONwEd5nQjj0ESN",
          "id": "7qVfz4UGONwEd5nQjj0ESN",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/cbf333da51368e549765f272c7b7645fbfe627a6",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/96c81e52229fffee24694112a3b45dcd8c4ae655",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/6c3d65e4f65f4c664927f0d5159f1e3497bc32da",
            "width": 64
          }],
          "name": "Black Ice",
          "type": "album",
          "uri": "spotify:album:7qVfz4UGONwEd5nQjj0ESN"
        }, {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }],
          "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4H6JMsvxmh0U7VBYiWiyLa"
          },
          "href": "https://api.spotify.com/v1/albums/4H6JMsvxmh0U7VBYiWiyLa",
          "id": "4H6JMsvxmh0U7VBYiWiyLa",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/005dcefa79908caa1cf8a74cb92524115c5d4b88",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/c006a1ff17e1c8e9857c60cdb44dca23664bde2e",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/4489bc475d21abc2f1deb1d30ff6ad6239acfe28",
            "width": 64
          }],
          "name": "Live at River Plate",
          "type": "album",
          "uri": "spotify:album:4H6JMsvxmh0U7VBYiWiyLa"
        }, {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }],
          "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/76mvVgXOde87B9aOzLXCOI"
          },
          "href": "https://api.spotify.com/v1/albums/76mvVgXOde87B9aOzLXCOI",
          "id": "76mvVgXOde87B9aOzLXCOI",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/998123a686f6c81beea0c02ca5e2769be8759010",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/f4595542a8131fd4ac6f16eafcea06278d72ec51",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/16e9d7bc1d7c9e1c69c1373e3b819b6eadd1e649",
            "width": 64
          }],
          "name": "Dirty Deeds Done Dirt Cheap",
          "type": "album",
          "uri": "spotify:album:76mvVgXOde87B9aOzLXCOI"
        }, {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }],
          "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3JwFNl80WWeXPiKEjIFbqa"
          },
          "href": "https://api.spotify.com/v1/albums/3JwFNl80WWeXPiKEjIFbqa",
          "id": "3JwFNl80WWeXPiKEjIFbqa",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/28f04fb112c3243bbbdd62a4dd34996eeba2eecc",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/5bb593efa9e407286fced6c033ea4f692cc9cb1e",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/77c181eeef860a28e4b27ffff5fb8301d9029847",
            "width": 64
          }],
          "name": "Let There Be Rock",
          "type": "album",
          "uri": "spotify:album:3JwFNl80WWeXPiKEjIFbqa"
        }, {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }],
          "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5JPVHEB67TREre4Q8JOfCQ"
          },
          "href": "https://api.spotify.com/v1/albums/5JPVHEB67TREre4Q8JOfCQ",
          "id": "5JPVHEB67TREre4Q8JOfCQ",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/267e963723a8191fe6570a7525cd26b2ecc640e4",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/015a00d8c5fa3c8cb1f564caff2c4727e8384357",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/18c06a0e12d956bd4b1616a764d138853a0e8944",
            "width": 64
          }],
          "name": "Stiff Upper Lip",
          "type": "album",
          "uri": "spotify:album:5JPVHEB67TREre4Q8JOfCQ"
        }, {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }],
          "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1zXYNAA57WJ33GgZJHchhX"
          },
          "href": "https://api.spotify.com/v1/albums/1zXYNAA57WJ33GgZJHchhX",
          "id": "1zXYNAA57WJ33GgZJHchhX",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/5679e9e9375c4ad8e2f717cbc654b3246c086f31",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/add0cd24ef404ab7b3dcc0f47e0f09acdbe0e0c1",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/129104ff51efea059ce6ee3d83e9d325ae198c47",
            "width": 64
          }],
          "name": "Ballbreaker",
          "type": "album",
          "uri": "spotify:album:1zXYNAA57WJ33GgZJHchhX"
        }, {
          "album_type": "compilation",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }],
          "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0I7FkYrckzJtK1ND8vzqoO"
          },
          "href": "https://api.spotify.com/v1/albums/0I7FkYrckzJtK1ND8vzqoO",
          "id": "0I7FkYrckzJtK1ND8vzqoO",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/79a3d306f23ee41be6619f301a34dd426bb44bbb",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/9a1ce1efabbbb0343778ee95eccc597386be4d2b",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/f5c1e7257545096ff7265463bba59e9d31853aa7",
            "width": 64
          }],
          "name": "Backtracks",
          "type": "album",
          "uri": "spotify:album:0I7FkYrckzJtK1ND8vzqoO"
        }, {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }],
          "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0rOXa1wPbBrCNl6knMyDBW"
          },
          "href": "https://api.spotify.com/v1/albums/0rOXa1wPbBrCNl6knMyDBW",
          "id": "0rOXa1wPbBrCNl6knMyDBW",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/8689b7d4c39bce520a286ba6531e6aa671bc71e4",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/94a08aadf52f64a0c5b4f535c2ad32bf4bad521e",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/85488228fbccff51ad6fa88684a66bb02d9d8034",
            "width": 64
          }],
          "name": "Fly on the Wall",
          "type": "album",
          "uri": "spotify:album:0rOXa1wPbBrCNl6knMyDBW"
        }, {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }],
          "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4iMaHsHqTg3rwOtRa5wEbm"
          },
          "href": "https://api.spotify.com/v1/albums/4iMaHsHqTg3rwOtRa5wEbm",
          "id": "4iMaHsHqTg3rwOtRa5wEbm",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/6090917bfa1d8d54cc390cb71cdda6fd880f5fc9",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/1d6289565aa6d2b69372f9de54cd57e06831220e",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/d692f9b4c97daf95a9afcaec58433059feee76ed",
            "width": 64
          }],
          "name": "Powerage",
          "type": "album",
          "uri": "spotify:album:4iMaHsHqTg3rwOtRa5wEbm"
        }, {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }],
          "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/38MklVAM0DEnMCLucNckDD"
          },
          "href": "https://api.spotify.com/v1/albums/38MklVAM0DEnMCLucNckDD",
          "id": "38MklVAM0DEnMCLucNckDD",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/6564adff9c70ad19e326695f7d22cf23b8d35eba",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/bb7d4de52227813848a15c6eec26ad2f0a32d612",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ddf04cf2b3d1c63434e74f3f3a4d9c4d1109c832",
            "width": 64
          }],
          "name": "If You Want Blood You've Got It (Live)",
          "type": "album",
          "uri": "spotify:album:38MklVAM0DEnMCLucNckDD"
        }, {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }],
          "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7DUvURQ0wfA1kgG8j99frR"
          },
          "href": "https://api.spotify.com/v1/albums/7DUvURQ0wfA1kgG8j99frR",
          "id": "7DUvURQ0wfA1kgG8j99frR",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/83d60c6b630444aca049379175b0e8cfeec98a34",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/f27aaacfab61ddd288d0f97c8ec7a269b63bc0dc",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/7538ad79da8ab97d3ccacc7127ffa073c31d6f16",
            "width": 64
          }],
          "name": "For Those About to Rock (We Salute You)",
          "type": "album",
          "uri": "spotify:album:7DUvURQ0wfA1kgG8j99frR"
        }, {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }],
          "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6jOO0YHvuHP4UkJuDpcAoz"
          },
          "href": "https://api.spotify.com/v1/albums/6jOO0YHvuHP4UkJuDpcAoz",
          "id": "6jOO0YHvuHP4UkJuDpcAoz",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/daa305a223b6e4b77d3cea14c5d6e273451041ba",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/23fd13e8ce83dfcef1effa5f7fccf351925fa432",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/8eb450f404852315da896f5e13c464f93ee04a9f",
            "width": 64
          }],
          "name": "Live (Collector's Edition)",
          "type": "album",
          "uri": "spotify:album:6jOO0YHvuHP4UkJuDpcAoz"
        }, {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }],
          "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5jfgUmvXCar7Qf5lidVkqI"
          },
          "href": "https://api.spotify.com/v1/albums/5jfgUmvXCar7Qf5lidVkqI",
          "id": "5jfgUmvXCar7Qf5lidVkqI",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/d5de9a58ed4e87613e4ccf2477c7fd81b5b9c529",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/90683550c3cfa18a71da665efbd2e5e3ef3d24c4",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/10edf37a1b6469cc0cca792cf9b2321eca563764",
            "width": 64
          }],
          "name": "Blow Up Your Video",
          "type": "album",
          "uri": "spotify:album:5jfgUmvXCar7Qf5lidVkqI"
        }],
        "limit": 20,
        "next": "https://api.spotify.com/v1/search?query=acdc&type=album&market=PL&offset=20&limit=20",
        "offset": 0,
        "previous": null,
        "total": 58
      }
    };
  }

  getAlbums(text: string) {
    return this.mockAlbums.albums.items.filter(item => {
      return item.name.toLowerCase().indexOf(text) > -1;
    });
  }
}
