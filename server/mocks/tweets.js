module.exports = function(app) {
  var express = require('express');
  var tweetsRouter = express.Router();

  tweetsRouter.get('/', function(req, res) {
    res.send({
      'tweets': [
        {
          "created_at": "Mon Nov 09 01:55:01 +0000 2015",
          "id": 663535230649770000,
          "id_str": "663535230649769985",
          "text": "Disturbance in Australian detention centre after death of asylum seeker https://t.co/66b34xPQj2 https://t.co/emrdDiUIN3",
          "source": "<a href=\"http://www.socialflow.com\" rel=\"nofollow\">SocialFlow</a>",
          "truncated": false,
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 972651,
            "id_str": "972651",
            "name": "Mashable",
            "screen_name": "mashable",
            "location": "",
            "description": "News, resources, inspiration and fun for the connected generation. Tweets by @mashable staff.",
            "url": "http://t.co/1Gm8aVACKn",
            "entities": {
              "url": {
                "urls": [
                  {
                    "url": "http://t.co/1Gm8aVACKn",
                    "expanded_url": "http://mashable.com",
                    "display_url": "mashable.com",
                    "indices": [
                      0,
                      22
                    ]
                  }
                ]
              },
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 6064577,
            "friends_count": 2826,
            "listed_count": 126429,
            "created_at": "Mon Mar 12 01:28:01 +0000 2007",
            "favourites_count": 577,
            "utc_offset": -18000,
            "time_zone": "Eastern Time (US & Canada)",
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 162694,
            "lang": "en",
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "00AEEF",
            "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/705312036/bf7ca2a3f077d7e57b12a5ea4f1db268.png",
            "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/705312036/bf7ca2a3f077d7e57b12a5ea4f1db268.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/638342444052930560/gMZvEMvt_normal.png",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/638342444052930560/gMZvEMvt_normal.png",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/972651/1401484849",
            "profile_link_color": "00AEEF",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "88DBF4",
            "profile_text_color": "3B3B3B",
            "profile_use_background_image": false,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 0,
          "favorite_count": 1,
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [
              {
                "url": "https://t.co/66b34xPQj2",
                "expanded_url": "http://on.mash.to/1QcZEla",
                "display_url": "on.mash.to/1QcZEla",
                "indices": [
                  72,
                  95
                ]
              }
            ],
            "media": [
              {
                "id": 663535229450084400,
                "id_str": "663535229450084354",
                "indices": [
                  96,
                  119
                ],
                "media_url": "http://pbs.twimg.com/media/CTVZxo9UYAI5Qs9.jpg",
                "media_url_https": "https://pbs.twimg.com/media/CTVZxo9UYAI5Qs9.jpg",
                "url": "https://t.co/emrdDiUIN3",
                "display_url": "pic.twitter.com/emrdDiUIN3",
                "expanded_url": "http://twitter.com/mashable/status/663535230649769985/photo/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "small": {
                    "w": 340,
                    "h": 191,
                    "resize": "fit"
                  },
                  "medium": {
                    "w": 600,
                    "h": 337,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 949,
                    "h": 534,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "extended_entities": {
            "media": [
              {
                "id": 663535229450084400,
                "id_str": "663535229450084354",
                "indices": [
                  96,
                  119
                ],
                "media_url": "http://pbs.twimg.com/media/CTVZxo9UYAI5Qs9.jpg",
                "media_url_https": "https://pbs.twimg.com/media/CTVZxo9UYAI5Qs9.jpg",
                "url": "https://t.co/emrdDiUIN3",
                "display_url": "pic.twitter.com/emrdDiUIN3",
                "expanded_url": "http://twitter.com/mashable/status/663535230649769985/photo/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "small": {
                    "w": 340,
                    "h": 191,
                    "resize": "fit"
                  },
                  "medium": {
                    "w": 600,
                    "h": 337,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 949,
                    "h": 534,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "possibly_sensitive_appealable": false,
          "lang": "en"
        },
        {
          "created_at": "Mon Nov 09 01:53:25 +0000 2015",
          "id": 663534827581407200,
          "id_str": "663534827581407233",
          "text": "Thanks! New episode with BILL HADER AND AMY SEDARIS Thurs night at 10:30 ON @truTV!!!  https://t.co/TkuqtuXMjS",
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "truncated": false,
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 74669397,
            "id_str": "74669397",
            "name": "billy eichner",
            "screen_name": "billyeichner",
            "location": "TRU TV/TBS, Hulu, FUNNY OR DIE",
            "description": "Emmy nom'd host - BILLY ON THE STREET! Thurs on @TruTV 10:30/930c or on TBS Sat 8:30pm! DIFFICULT PEOPLE on @HULU! CRAIG on PARKS & REC! billyeichner on Insta",
            "url": "https://t.co/Q9g6szGLLg",
            "entities": {
              "url": {
                "urls": [
                  {
                    "url": "https://t.co/Q9g6szGLLg",
                    "expanded_url": "http://funnyordie.com/billyonthestreet",
                    "display_url": "funnyordie.com/billyonthestre…",
                    "indices": [
                      0,
                      23
                    ]
                  }
                ]
              },
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 406251,
            "friends_count": 1716,
            "listed_count": 2466,
            "created_at": "Wed Sep 16 06:33:53 +0000 2009",
            "favourites_count": 23790,
            "utc_offset": -18000,
            "time_zone": "Eastern Time (US & Canada)",
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 17073,
            "lang": "en",
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "C0DEED",
            "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/606538242859630592/HY_Mc_Cm.jpg",
            "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/606538242859630592/HY_Mc_Cm.jpg",
            "profile_background_tile": true,
            "profile_image_url": "http://pbs.twimg.com/profile_images/654778650445807616/Ke8beiVC_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/654778650445807616/Ke8beiVC_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/74669397/1443300278",
            "profile_link_color": "0084B4",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "quoted_status_id": 663502497106010100,
          "quoted_status_id_str": "663502497106010112",
          "quoted_status": {
            "created_at": "Sun Nov 08 23:44:57 +0000 2015",
            "id": 663502497106010100,
            "id_str": "663502497106010112",
            "text": "@billyeichner Can't wait for the next episode of Billy on the Street it's my favorite show on T.V. you always make me laugh my ass off!!",
            "source": "<a href=\"http://twitter.com/#!/download/ipad\" rel=\"nofollow\">Twitter for iPad</a>",
            "truncated": false,
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": 74669397,
            "in_reply_to_user_id_str": "74669397",
            "in_reply_to_screen_name": "billyeichner",
            "user": {
              "id": 52469243,
              "id_str": "52469243",
              "name": "Philip Crisci ",
              "screen_name": "PhilipCrisci",
              "location": "Tivoli NY",
              "description": "Living The Dream",
              "url": null,
              "entities": {
                "description": {
                  "urls": []
                }
              },
              "protected": false,
              "followers_count": 62,
              "friends_count": 542,
              "listed_count": 0,
              "created_at": "Tue Jun 30 18:08:41 +0000 2009",
              "favourites_count": 91,
              "utc_offset": -18000,
              "time_zone": "Quito",
              "geo_enabled": false,
              "verified": false,
              "statuses_count": 650,
              "lang": "en",
              "contributors_enabled": false,
              "is_translator": false,
              "is_translation_enabled": false,
              "profile_background_color": "1A1B1F",
              "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/538371167/Yankees_logo.png",
              "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/538371167/Yankees_logo.png",
              "profile_background_tile": false,
              "profile_image_url": "http://pbs.twimg.com/profile_images/639959255806791681/6b5-r2Sz_normal.jpg",
              "profile_image_url_https": "https://pbs.twimg.com/profile_images/639959255806791681/6b5-r2Sz_normal.jpg",
              "profile_banner_url": "https://pbs.twimg.com/profile_banners/52469243/1410405615",
              "profile_link_color": "E62E20",
              "profile_sidebar_border_color": "EEEEEE",
              "profile_sidebar_fill_color": "EFEFEF",
              "profile_text_color": "333333",
              "profile_use_background_image": true,
              "has_extended_profile": false,
              "default_profile": false,
              "default_profile_image": false,
              "following": false,
              "follow_request_sent": false,
              "notifications": false
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "entities": {
              "hashtags": [],
              "symbols": [],
              "user_mentions": [
                {
                  "screen_name": "billyeichner",
                  "name": "billy eichner",
                  "id": 74669397,
                  "id_str": "74669397",
                  "indices": [
                    0,
                    13
                  ]
                }
              ],
              "urls": []
            },
            "favorited": false,
            "retweeted": false,
            "lang": "en"
          },
          "is_quote_status": true,
          "retweet_count": 5,
          "favorite_count": 28,
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [
              {
                "screen_name": "truTV",
                "name": "truTV",
                "id": 21884158,
                "id_str": "21884158",
                "indices": [
                  76,
                  82
                ]
              }
            ],
            "urls": [
              {
                "url": "https://t.co/TkuqtuXMjS",
                "expanded_url": "https://twitter.com/philipcrisci/status/663502497106010112",
                "display_url": "twitter.com/philipcrisci/s…",
                "indices": [
                  87,
                  110
                ]
              }
            ]
          },
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "possibly_sensitive_appealable": false,
          "lang": "en"
        },
        {
          "created_at": "Mon Nov 09 01:52:05 +0000 2015",
          "id": 663534493601370100,
          "id_str": "663534493601370112",
          "text": "Thank you Zach @bathbodyworks for the wonderful service and assistance w/my online order this evening! Professional and friendly!",
          "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
          "truncated": false,
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 15569234,
            "id_str": "15569234",
            "name": "Nicole Crain",
            "screen_name": "thenicolecrain",
            "location": "",
            "description": "Wife.Daughter. Sister. Aunt. Friend. Professional. Living the dream in IA.",
            "url": null,
            "entities": {
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 695,
            "friends_count": 619,
            "listed_count": 30,
            "created_at": "Wed Jul 23 18:34:22 +0000 2008",
            "favourites_count": 236,
            "utc_offset": -21600,
            "time_zone": "Central Time (US & Canada)",
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 4118,
            "lang": "en",
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "C0DEED",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1123134817/nicole-twitter_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1123134817/nicole-twitter_normal.jpg",
            "profile_link_color": "0084B4",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": true,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 0,
          "favorite_count": 0,
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [
              {
                "screen_name": "bathbodyworks",
                "name": "Bath & Body Works",
                "id": 249203600,
                "id_str": "249203600",
                "indices": [
                  15,
                  29
                ]
              }
            ],
            "urls": []
          },
          "favorited": false,
          "retweeted": false,
          "lang": "en"
        },
        {
          "created_at": "Mon Nov 09 01:51:45 +0000 2015",
          "id": 663534408733999100,
          "id_str": "663534408733999104",
          "text": "Birmingham, AL TOMORROW https://t.co/YQykV38rkw",
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "truncated": false,
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 103387700,
            "id_str": "103387700",
            "name": "Brooks Wheelan",
            "screen_name": "brookswheelan",
            "location": "",
            "description": "Tickets and info on venues for my tour thru OR, AZ, MI, IN, IL, MO, KS, NE, HI, OH, KY, TN, MS, AL, LA, AR, and TX",
            "url": "http://t.co/rcld1KHo1l",
            "entities": {
              "url": {
                "urls": [
                  {
                    "url": "http://t.co/rcld1KHo1l",
                    "expanded_url": "http://brookswheelan.com/shows",
                    "display_url": "brookswheelan.com/shows",
                    "indices": [
                      0,
                      22
                    ]
                  }
                ]
              },
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 48724,
            "friends_count": 478,
            "listed_count": 375,
            "created_at": "Sat Jan 09 21:38:16 +0000 2010",
            "favourites_count": 4669,
            "utc_offset": -28800,
            "time_zone": "Pacific Time (US & Canada)",
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 2775,
            "lang": "en",
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "C0DEED",
            "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/385487895/bush2.jpg",
            "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/385487895/bush2.jpg",
            "profile_background_tile": true,
            "profile_image_url": "http://pbs.twimg.com/profile_images/775622810/pearlio_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/775622810/pearlio_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/103387700/1445109408",
            "profile_link_color": "0084B4",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "quoted_status_id": 663056287526203400,
          "quoted_status_id_str": "663056287526203392",
          "quoted_status": {
            "created_at": "Sat Nov 07 18:11:52 +0000 2015",
            "id": 663056287526203400,
            "id_str": "663056287526203392",
            "text": "Great article by @WeldBham in prep for @brookswheelan show in Bham.. https://t.co/6TJLHxrl58",
            "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
            "truncated": false,
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
              "id": 3033537203,
              "id_str": "3033537203",
              "name": "Goulash Comedy",
              "screen_name": "GoulashComedy",
              "location": "Birmingham, AL",
              "description": "Bringing a comedy stew to Birmingham, AL.",
              "url": "http://t.co/XpVnVyx4pt",
              "entities": {
                "url": {
                  "urls": [
                    {
                      "url": "http://t.co/XpVnVyx4pt",
                      "expanded_url": "http://goulashcomedy.com",
                      "display_url": "goulashcomedy.com",
                      "indices": [
                        0,
                        22
                      ]
                    }
                  ]
                },
                "description": {
                  "urls": []
                }
              },
              "protected": false,
              "followers_count": 31,
              "friends_count": 95,
              "listed_count": 1,
              "created_at": "Thu Feb 12 22:17:08 +0000 2015",
              "favourites_count": 47,
              "utc_offset": null,
              "time_zone": null,
              "geo_enabled": false,
              "verified": false,
              "statuses_count": 63,
              "lang": "en",
              "contributors_enabled": false,
              "is_translator": false,
              "is_translation_enabled": false,
              "profile_background_color": "C0DEED",
              "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
              "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
              "profile_background_tile": false,
              "profile_image_url": "http://pbs.twimg.com/profile_images/639647343000842240/hk9pVM7-_normal.jpg",
              "profile_image_url_https": "https://pbs.twimg.com/profile_images/639647343000842240/hk9pVM7-_normal.jpg",
              "profile_banner_url": "https://pbs.twimg.com/profile_banners/3033537203/1441338785",
              "profile_link_color": "0084B4",
              "profile_sidebar_border_color": "C0DEED",
              "profile_sidebar_fill_color": "DDEEF6",
              "profile_text_color": "333333",
              "profile_use_background_image": true,
              "has_extended_profile": false,
              "default_profile": true,
              "default_profile_image": false,
              "following": false,
              "follow_request_sent": false,
              "notifications": false
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "entities": {
              "hashtags": [],
              "symbols": [],
              "user_mentions": [
                {
                  "screen_name": "WeldBham",
                  "name": "Weld for Birmingham",
                  "id": 23389030,
                  "id_str": "23389030",
                  "indices": [
                    17,
                    26
                  ]
                },
                {
                  "screen_name": "brookswheelan",
                  "name": "Brooks Wheelan",
                  "id": 103387700,
                  "id_str": "103387700",
                  "indices": [
                    39,
                    53
                  ]
                }
              ],
              "urls": [
                {
                  "url": "https://t.co/6TJLHxrl58",
                  "expanded_url": "http://weldbham.com/blog/2015/11/06/brooks-wheelans-going-to-need-to-talk-about-this/",
                  "display_url": "weldbham.com/blog/2015/11/0…",
                  "indices": [
                    69,
                    92
                  ]
                }
              ]
            },
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "possibly_sensitive_appealable": false,
            "lang": "en"
          },
          "is_quote_status": true,
          "retweet_count": 0,
          "favorite_count": 2,
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [
              {
                "url": "https://t.co/YQykV38rkw",
                "expanded_url": "https://twitter.com/goulashcomedy/status/663056287526203392",
                "display_url": "twitter.com/goulashcomedy/…",
                "indices": [
                  24,
                  47
                ]
              }
            ]
          },
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "possibly_sensitive_appealable": false,
          "lang": "en"
        },
        {
          "created_at": "Mon Nov 09 01:50:26 +0000 2015",
          "id": 663534075479724000,
          "id_str": "663534075479724032",
          "text": "RT @lafayettecomedy: In less than a week we welcome @brookswheelan &amp; @matty_ryan to @NiteTown | Hosted by @theJPLeonard |",
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "truncated": false,
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 103387700,
            "id_str": "103387700",
            "name": "Brooks Wheelan",
            "screen_name": "brookswheelan",
            "location": "",
            "description": "Tickets and info on venues for my tour thru OR, AZ, MI, IN, IL, MO, KS, NE, HI, OH, KY, TN, MS, AL, LA, AR, and TX",
            "url": "http://t.co/rcld1KHo1l",
            "entities": {
              "url": {
                "urls": [
                  {
                    "url": "http://t.co/rcld1KHo1l",
                    "expanded_url": "http://brookswheelan.com/shows",
                    "display_url": "brookswheelan.com/shows",
                    "indices": [
                      0,
                      22
                    ]
                  }
                ]
              },
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 48724,
            "friends_count": 478,
            "listed_count": 375,
            "created_at": "Sat Jan 09 21:38:16 +0000 2010",
            "favourites_count": 4669,
            "utc_offset": -28800,
            "time_zone": "Pacific Time (US & Canada)",
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 2775,
            "lang": "en",
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "C0DEED",
            "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/385487895/bush2.jpg",
            "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/385487895/bush2.jpg",
            "profile_background_tile": true,
            "profile_image_url": "http://pbs.twimg.com/profile_images/775622810/pearlio_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/775622810/pearlio_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/103387700/1445109408",
            "profile_link_color": "0084B4",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "retweeted_status": {
            "created_at": "Sun Nov 08 15:47:35 +0000 2015",
            "id": 663382366111400000,
            "id_str": "663382366111399936",
            "text": "In less than a week we welcome @brookswheelan &amp; @matty_ryan to @NiteTown | Hosted by @theJPLeonard |",
            "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
            "truncated": false,
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
              "id": 2760876527,
              "id_str": "2760876527",
              "name": "Lafayette Comedy",
              "screen_name": "lafayettecomedy",
              "location": "Lafayette, LA",
              "description": "Standup comedy promotion | #lafayettecomedy Coming soon: @KillerBeaz (11/6), @BrooksWheelan (11/13), @DSGermain (11/20), @calebsynan (11/22) | @thejpleonard",
              "url": "https://t.co/Ht8ZTou1zB",
              "entities": {
                "url": {
                  "urls": [
                    {
                      "url": "https://t.co/Ht8ZTou1zB",
                      "expanded_url": "http://www.lafayettecomedy.com",
                      "display_url": "lafayettecomedy.com",
                      "indices": [
                        0,
                        23
                      ]
                    }
                  ]
                },
                "description": {
                  "urls": []
                }
              },
              "protected": false,
              "followers_count": 832,
              "friends_count": 1864,
              "listed_count": 8,
              "created_at": "Thu Sep 04 01:33:11 +0000 2014",
              "favourites_count": 222,
              "utc_offset": -21600,
              "time_zone": "Central Time (US & Canada)",
              "geo_enabled": true,
              "verified": false,
              "statuses_count": 1825,
              "lang": "en",
              "contributors_enabled": false,
              "is_translator": false,
              "is_translation_enabled": false,
              "profile_background_color": "C0DEED",
              "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
              "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
              "profile_background_tile": false,
              "profile_image_url": "http://pbs.twimg.com/profile_images/651048751725809664/5xppxJLp_normal.jpg",
              "profile_image_url_https": "https://pbs.twimg.com/profile_images/651048751725809664/5xppxJLp_normal.jpg",
              "profile_banner_url": "https://pbs.twimg.com/profile_banners/2760876527/1446580435",
              "profile_link_color": "0084B4",
              "profile_sidebar_border_color": "C0DEED",
              "profile_sidebar_fill_color": "DDEEF6",
              "profile_text_color": "333333",
              "profile_use_background_image": true,
              "has_extended_profile": false,
              "default_profile": true,
              "default_profile_image": false,
              "following": false,
              "follow_request_sent": false,
              "notifications": false
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 3,
            "favorite_count": 2,
            "entities": {
              "hashtags": [],
              "symbols": [],
              "user_mentions": [
                {
                  "screen_name": "brookswheelan",
                  "name": "Brooks Wheelan",
                  "id": 103387700,
                  "id_str": "103387700",
                  "indices": [
                    31,
                    45
                  ]
                },
                {
                  "screen_name": "matty_ryan",
                  "name": "Matty Ryan",
                  "id": 55027789,
                  "id_str": "55027789",
                  "indices": [
                    52,
                    63
                  ]
                },
                {
                  "screen_name": "NiteTown",
                  "name": "Nite Town™",
                  "id": 380994509,
                  "id_str": "380994509",
                  "indices": [
                    67,
                    76
                  ]
                },
                {
                  "screen_name": "theJPLeonard",
                  "name": "Jason P. Leonard",
                  "id": 230982856,
                  "id_str": "230982856",
                  "indices": [
                    89,
                    102
                  ]
                }
              ],
              "urls": []
            },
            "favorited": false,
            "retweeted": false,
            "lang": "en"
          },
          "is_quote_status": false,
          "retweet_count": 3,
          "favorite_count": 0,
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [
              {
                "screen_name": "lafayettecomedy",
                "name": "Lafayette Comedy",
                "id": 2760876527,
                "id_str": "2760876527",
                "indices": [
                  3,
                  19
                ]
              },
              {
                "screen_name": "brookswheelan",
                "name": "Brooks Wheelan",
                "id": 103387700,
                "id_str": "103387700",
                "indices": [
                  52,
                  66
                ]
              },
              {
                "screen_name": "matty_ryan",
                "name": "Matty Ryan",
                "id": 55027789,
                "id_str": "55027789",
                "indices": [
                  73,
                  84
                ]
              },
              {
                "screen_name": "NiteTown",
                "name": "Nite Town™",
                "id": 380994509,
                "id_str": "380994509",
                "indices": [
                  88,
                  97
                ]
              },
              {
                "screen_name": "theJPLeonard",
                "name": "Jason P. Leonard",
                "id": 230982856,
                "id_str": "230982856",
                "indices": [
                  110,
                  123
                ]
              }
            ],
            "urls": []
          },
          "favorited": false,
          "retweeted": false,
          "lang": "en"
        }
      ]
    });
  });

  tweetsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  tweetsRouter.get('/:id', function(req, res) {
    res.send({
      'tweets': {
        "created_at": "Mon Nov 09 01:55:01 +0000 2015",
        "id": 663535230649770000,
        "id_str": "663535230649769985",
        "text": "Disturbance in Australian detention centre after death of asylum seeker https://t.co/66b34xPQj2 https://t.co/emrdDiUIN3",
        "source": "<a href=\"http://www.socialflow.com\" rel=\"nofollow\">SocialFlow</a>",
        "truncated": false,
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 972651,
          "id_str": "972651",
          "name": "Mashable",
          "screen_name": "mashable",
          "location": "",
          "description": "News, resources, inspiration and fun for the connected generation. Tweets by @mashable staff.",
          "url": "http://t.co/1Gm8aVACKn",
          "entities": {
            "url": {
              "urls": [
                {
                  "url": "http://t.co/1Gm8aVACKn",
                  "expanded_url": "http://mashable.com",
                  "display_url": "mashable.com",
                  "indices": [
                    0,
                    22
                  ]
                }
              ]
            },
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 6064577,
          "friends_count": 2826,
          "listed_count": 126429,
          "created_at": "Mon Mar 12 01:28:01 +0000 2007",
          "favourites_count": 577,
          "utc_offset": -18000,
          "time_zone": "Eastern Time (US & Canada)",
          "geo_enabled": false,
          "verified": true,
          "statuses_count": 162694,
          "lang": "en",
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "00AEEF",
          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/705312036/bf7ca2a3f077d7e57b12a5ea4f1db268.png",
          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/705312036/bf7ca2a3f077d7e57b12a5ea4f1db268.png",
          "profile_background_tile": false,
          "profile_image_url": "http://pbs.twimg.com/profile_images/638342444052930560/gMZvEMvt_normal.png",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/638342444052930560/gMZvEMvt_normal.png",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/972651/1401484849",
          "profile_link_color": "00AEEF",
          "profile_sidebar_border_color": "FFFFFF",
          "profile_sidebar_fill_color": "88DBF4",
          "profile_text_color": "3B3B3B",
          "profile_use_background_image": false,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": true,
          "follow_request_sent": false,
          "notifications": false
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 1,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [],
          "urls": [
            {
              "url": "https://t.co/66b34xPQj2",
              "expanded_url": "http://on.mash.to/1QcZEla",
              "display_url": "on.mash.to/1QcZEla",
              "indices": [
                72,
                95
              ]
            }
          ],
          "media": [
            {
              "id": 663535229450084400,
              "id_str": "663535229450084354",
              "indices": [
                96,
                119
              ],
              "media_url": "http://pbs.twimg.com/media/CTVZxo9UYAI5Qs9.jpg",
              "media_url_https": "https://pbs.twimg.com/media/CTVZxo9UYAI5Qs9.jpg",
              "url": "https://t.co/emrdDiUIN3",
              "display_url": "pic.twitter.com/emrdDiUIN3",
              "expanded_url": "http://twitter.com/mashable/status/663535230649769985/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "small": {
                  "w": 340,
                  "h": 191,
                  "resize": "fit"
                },
                "medium": {
                  "w": 600,
                  "h": 337,
                  "resize": "fit"
                },
                "large": {
                  "w": 949,
                  "h": 534,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 663535229450084400,
              "id_str": "663535229450084354",
              "indices": [
                96,
                119
              ],
              "media_url": "http://pbs.twimg.com/media/CTVZxo9UYAI5Qs9.jpg",
              "media_url_https": "https://pbs.twimg.com/media/CTVZxo9UYAI5Qs9.jpg",
              "url": "https://t.co/emrdDiUIN3",
              "display_url": "pic.twitter.com/emrdDiUIN3",
              "expanded_url": "http://twitter.com/mashable/status/663535230649769985/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "small": {
                  "w": 340,
                  "h": 191,
                  "resize": "fit"
                },
                "medium": {
                  "w": 600,
                  "h": 337,
                  "resize": "fit"
                },
                "large": {
                  "w": 949,
                  "h": 534,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "en"
      }
    });
  });

  tweetsRouter.put('/:id', function(req, res) {
    res.send({
      'tweets': {
        id: req.params.id
      }
    });
  });

  tweetsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/tweets', tweetsRouter);
};
