jest.mock('./api');

import React from 'react';
import Profile from './profile';
import renderer from 'react-test-renderer';

test('tweet render matches snapshot', () => {
	const data = {
	  "id": 24623145,
	  "id_str": "24623145",
	  "name": "Steve Dangle Glynn",
	  "screen_name": "Steve_Dangle",
	  "location": "Toronto",
	  "profile_location": null,
	  "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	  "url": "https://t.co/INunLgk3Dn",
	  "entities": {
	    "url": {
	      "urls": [
	        {
	          "url": "https://t.co/INunLgk3Dn",
	          "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	          "display_url": "sportsnet.ca/hockey/nhl/blo…",
	          "indices": [
	            0,
	            23
	          ]
	        }
	      ]
	    },
	    "description": {
	      "urls": [
	        {
	          "url": "https://t.co/qJeHmofJLB",
	          "expanded_url": "http://theleafsnation.com",
	          "display_url": "theleafsnation.com",
	          "indices": [
	            82,
	            105
	          ]
	        }
	      ]
	    }
	  },
	  "protected": false,
	  "followers_count": 102987,
	  "friends_count": 2680,
	  "listed_count": 1166,
	  "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	  "favourites_count": 76053,
	  "utc_offset": -18000,
	  "time_zone": "Quito",
	  "geo_enabled": false,
	  "verified": true,
	  "statuses_count": 115689,
	  "lang": "en",
	  "status": {
	    "created_at": "Mon Jan 01 23:38:52 +0000 2018",
	    "id": 947975442837004300,
	    "id_str": "947975442837004289",
	    "text": "RT @incisively: @Steve_Dangle I'm sure you've gotten this a lot today but as someone who now lives in Vegas. ITS UNREAL the city is crazier…",
	    "truncated": false,
	    "entities": {
	      "hashtags": [],
	      "symbols": [],
	      "user_mentions": [
	        {
	          "screen_name": "incisively",
	          "name": "Tom",
	          "id": 28053117,
	          "id_str": "28053117",
	          "indices": [
	            3,
	            14
	          ]
	        },
	        {
	          "screen_name": "Steve_Dangle",
	          "name": "Steve Dangle Glynn",
	          "id": 24623145,
	          "id_str": "24623145",
	          "indices": [
	            16,
	            29
	          ]
	        }
	      ],
	      "urls": []
	    },
	    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	    "in_reply_to_status_id": null,
	    "in_reply_to_status_id_str": null,
	    "in_reply_to_user_id": null,
	    "in_reply_to_user_id_str": null,
	    "in_reply_to_screen_name": null,
	    "geo": null,
	    "coordinates": null,
	    "place": null,
	    "contributors": null,
	    "retweeted_status": {
	      "created_at": "Mon Jan 01 23:32:24 +0000 2018",
	      "id": 947973812758253600,
	      "id_str": "947973812758253568",
	      "text": "@Steve_Dangle I'm sure you've gotten this a lot today but as someone who now lives in Vegas. ITS UNREAL the city is… https://t.co/TamUuON1Kp",
	      "truncated": true,
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [
	          {
	            "screen_name": "Steve_Dangle",
	            "name": "Steve Dangle Glynn",
	            "id": 24623145,
	            "id_str": "24623145",
	            "indices": [
	              0,
	              13
	            ]
	          }
	        ],
	        "urls": [
	          {
	            "url": "https://t.co/TamUuON1Kp",
	            "expanded_url": "https://twitter.com/i/web/status/947973812758253568",
	            "display_url": "twitter.com/i/web/status/9…",
	            "indices": [
	              117,
	              140
	            ]
	          }
	        ]
	      },
	      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	      "in_reply_to_status_id": null,
	      "in_reply_to_status_id_str": null,
	      "in_reply_to_user_id": 24623145,
	      "in_reply_to_user_id_str": "24623145",
	      "in_reply_to_screen_name": "Steve_Dangle",
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "is_quote_status": false,
	      "retweet_count": 1,
	      "favorite_count": 21,
	      "favorited": false,
	      "retweeted": false,
	      "lang": "en"
	    },
	    "is_quote_status": false,
	    "retweet_count": 1,
	    "favorite_count": 0,
	    "favorited": false,
	    "retweeted": false,
	    "lang": "en"
	  },
	  "contributors_enabled": false,
	  "is_translator": false,
	  "is_translation_enabled": false,
	  "profile_background_color": "1A1B1F",
	  "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	  "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	  "profile_background_tile": true,
	  "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	  "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	  "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	  "profile_link_color": "053EFA",
	  "profile_sidebar_border_color": "181A1E",
	  "profile_sidebar_fill_color": "252429",
	  "profile_text_color": "666666",
	  "profile_use_background_image": true,
	  "has_extended_profile": false,
	  "default_profile": false,
	  "default_profile_image": false,
	  "following": true,
	  "follow_request_sent": false,
	  "notifications": false,
	  "translator_type": "none",
	  "timeline": [
	    {
	      "created_at": "Mon Jan 01 23:38:52 +0000 2018",
	      "id": 947975442837004300,
	      "id_str": "947975442837004289",
	      "full_text": "RT @incisively: @Steve_Dangle I'm sure you've gotten this a lot today but as someone who now lives in Vegas. ITS UNREAL the city is crazier…",
	      "truncated": false,
	      "display_text_range": [
	        0,
	        140
	      ],
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [
	          {
	            "screen_name": "incisively",
	            "name": "Tom",
	            "id": 28053117,
	            "id_str": "28053117",
	            "indices": [
	              3,
	              14
	            ]
	          },
	          {
	            "screen_name": "Steve_Dangle",
	            "name": "Steve Dangle Glynn",
	            "id": 24623145,
	            "id_str": "24623145",
	            "indices": [
	              16,
	              29
	            ]
	          }
	        ],
	        "urls": []
	      },
	      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	      "in_reply_to_status_id": null,
	      "in_reply_to_status_id_str": null,
	      "in_reply_to_user_id": null,
	      "in_reply_to_user_id_str": null,
	      "in_reply_to_screen_name": null,
	      "user": {
	        "id": 24623145,
	        "id_str": "24623145",
	        "name": "Steve Dangle Glynn",
	        "screen_name": "Steve_Dangle",
	        "location": "Toronto",
	        "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	        "url": "https://t.co/INunLgk3Dn",
	        "entities": {
	          "url": {
	            "urls": [
	              {
	                "url": "https://t.co/INunLgk3Dn",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                "indices": [
	                  0,
	                  23
	                ]
	              }
	            ]
	          },
	          "description": {
	            "urls": [
	              {
	                "url": "https://t.co/qJeHmofJLB",
	                "expanded_url": "http://theleafsnation.com",
	                "display_url": "theleafsnation.com",
	                "indices": [
	                  82,
	                  105
	                ]
	              }
	            ]
	          }
	        },
	        "protected": false,
	        "followers_count": 102987,
	        "friends_count": 2680,
	        "listed_count": 1166,
	        "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	        "favourites_count": 76053,
	        "utc_offset": -18000,
	        "time_zone": "Quito",
	        "geo_enabled": false,
	        "verified": true,
	        "statuses_count": 115689,
	        "lang": "en",
	        "contributors_enabled": false,
	        "is_translator": false,
	        "is_translation_enabled": false,
	        "profile_background_color": "1A1B1F",
	        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_tile": true,
	        "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	        "profile_link_color": "053EFA",
	        "profile_sidebar_border_color": "181A1E",
	        "profile_sidebar_fill_color": "252429",
	        "profile_text_color": "666666",
	        "profile_use_background_image": true,
	        "has_extended_profile": false,
	        "default_profile": false,
	        "default_profile_image": false,
	        "following": true,
	        "follow_request_sent": false,
	        "notifications": false,
	        "translator_type": "none"
	      },
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "retweeted_status": {
	        "created_at": "Mon Jan 01 23:32:24 +0000 2018",
	        "id": 947973812758253600,
	        "id_str": "947973812758253568",
	        "full_text": "@Steve_Dangle I'm sure you've gotten this a lot today but as someone who now lives in Vegas. ITS UNREAL the city is crazier about the team than I thought was possible.",
	        "truncated": false,
	        "display_text_range": [
	          0,
	          167
	        ],
	        "entities": {
	          "hashtags": [],
	          "symbols": [],
	          "user_mentions": [
	            {
	              "screen_name": "Steve_Dangle",
	              "name": "Steve Dangle Glynn",
	              "id": 24623145,
	              "id_str": "24623145",
	              "indices": [
	                0,
	                13
	              ]
	            }
	          ],
	          "urls": []
	        },
	        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	        "in_reply_to_status_id": null,
	        "in_reply_to_status_id_str": null,
	        "in_reply_to_user_id": 24623145,
	        "in_reply_to_user_id_str": "24623145",
	        "in_reply_to_screen_name": "Steve_Dangle",
	        "user": {
	          "id": 28053117,
	          "id_str": "28053117",
	          "name": "Tom",
	          "screen_name": "incisively",
	          "location": "707 - 702",
	          "description": "Giants. 49ers. Golden Knights. Family.",
	          "url": null,
	          "entities": {
	            "description": {
	              "urls": []
	            }
	          },
	          "protected": false,
	          "followers_count": 227,
	          "friends_count": 939,
	          "listed_count": 17,
	          "created_at": "Wed Apr 01 04:48:22 +0000 2009",
	          "favourites_count": 6448,
	          "utc_offset": -28800,
	          "time_zone": "Pacific Time (US & Canada)",
	          "geo_enabled": false,
	          "verified": false,
	          "statuses_count": 16811,
	          "lang": "en",
	          "contributors_enabled": false,
	          "is_translator": false,
	          "is_translation_enabled": false,
	          "profile_background_color": "C0DEED",
	          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/180004517/_sf_giantsx_richleedraws-2010-ROY.jpg",
	          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/180004517/_sf_giantsx_richleedraws-2010-ROY.jpg",
	          "profile_background_tile": false,
	          "profile_image_url": "http://pbs.twimg.com/profile_images/923388833814560768/soGLnH3O_normal.jpg",
	          "profile_image_url_https": "https://pbs.twimg.com/profile_images/923388833814560768/soGLnH3O_normal.jpg",
	          "profile_banner_url": "https://pbs.twimg.com/profile_banners/28053117/1483331504",
	          "profile_link_color": "0084B4",
	          "profile_sidebar_border_color": "C0DEED",
	          "profile_sidebar_fill_color": "DDEEF6",
	          "profile_text_color": "333333",
	          "profile_use_background_image": true,
	          "has_extended_profile": false,
	          "default_profile": false,
	          "default_profile_image": false,
	          "following": false,
	          "follow_request_sent": false,
	          "notifications": false,
	          "translator_type": "none"
	        },
	        "geo": null,
	        "coordinates": null,
	        "place": null,
	        "contributors": null,
	        "is_quote_status": false,
	        "retweet_count": 1,
	        "favorite_count": 21,
	        "favorited": false,
	        "retweeted": false,
	        "lang": "en",
	        "retweeteduser": {
	          "id": 24623145,
	          "id_str": "24623145",
	          "name": "Steve Dangle Glynn",
	          "screen_name": "Steve_Dangle",
	          "location": "Toronto",
	          "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	          "url": "https://t.co/INunLgk3Dn",
	          "entities": {
	            "url": {
	              "urls": [
	                {
	                  "url": "https://t.co/INunLgk3Dn",
	                  "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                  "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                  "indices": [
	                    0,
	                    23
	                  ]
	                }
	              ]
	            },
	            "description": {
	              "urls": [
	                {
	                  "url": "https://t.co/qJeHmofJLB",
	                  "expanded_url": "http://theleafsnation.com",
	                  "display_url": "theleafsnation.com",
	                  "indices": [
	                    82,
	                    105
	                  ]
	                }
	              ]
	            }
	          },
	          "protected": false,
	          "followers_count": 102987,
	          "friends_count": 2680,
	          "listed_count": 1166,
	          "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	          "favourites_count": 76053,
	          "utc_offset": -18000,
	          "time_zone": "Quito",
	          "geo_enabled": false,
	          "verified": true,
	          "statuses_count": 115689,
	          "lang": "en",
	          "contributors_enabled": false,
	          "is_translator": false,
	          "is_translation_enabled": false,
	          "profile_background_color": "1A1B1F",
	          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	          "profile_background_tile": true,
	          "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	          "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	          "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	          "profile_link_color": "053EFA",
	          "profile_sidebar_border_color": "181A1E",
	          "profile_sidebar_fill_color": "252429",
	          "profile_text_color": "666666",
	          "profile_use_background_image": true,
	          "has_extended_profile": false,
	          "default_profile": false,
	          "default_profile_image": false,
	          "following": true,
	          "follow_request_sent": false,
	          "notifications": false,
	          "translator_type": "none"
	        }
	      },
	      "is_quote_status": false,
	      "retweet_count": 1,
	      "favorite_count": 0,
	      "favorited": false,
	      "retweeted": false,
	      "lang": "en",
	      "selected": ""
	    },
	    {
	      "created_at": "Mon Jan 01 23:19:24 +0000 2018",
	      "id": 947970544888111100,
	      "id_str": "947970544888111110",
	      "full_text": "RT @RoyPurdy: Walking into 2018 like... https://t.co/o9AMAKX3L8",
	      "truncated": false,
	      "display_text_range": [
	        0,
	        63
	      ],
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [
	          {
	            "screen_name": "RoyPurdy",
	            "name": "ROY PURDY",
	            "id": 2439286387,
	            "id_str": "2439286387",
	            "indices": [
	              3,
	              12
	            ]
	          }
	        ],
	        "urls": [],
	        "media": [
	          {
	            "id": 947552351698632700,
	            "id_str": "947552351698632704",
	            "indices": [
	              40,
	              63
	            ],
	            "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/947552351698632704/pu/img/ubAEqzpvWkc-d0pD.jpg",
	            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/947552351698632704/pu/img/ubAEqzpvWkc-d0pD.jpg",
	            "url": "https://t.co/o9AMAKX3L8",
	            "display_url": "pic.twitter.com/o9AMAKX3L8",
	            "expanded_url": "https://twitter.com/RoyPurdy/status/947552487170457600/video/1",
	            "type": "photo",
	            "sizes": {
	              "thumb": {
	                "w": 150,
	                "h": 150,
	                "resize": "crop"
	              },
	              "small": {
	                "w": 680,
	                "h": 680,
	                "resize": "fit"
	              },
	              "medium": {
	                "w": 720,
	                "h": 720,
	                "resize": "fit"
	              },
	              "large": {
	                "w": 720,
	                "h": 720,
	                "resize": "fit"
	              }
	            },
	            "source_status_id": 947552487170457600,
	            "source_status_id_str": "947552487170457600",
	            "source_user_id": 2439286387,
	            "source_user_id_str": "2439286387"
	          }
	        ]
	      },
	      "extended_entities": {
	        "media": [
	          {
	            "id": 947552351698632700,
	            "id_str": "947552351698632704",
	            "indices": [
	              40,
	              63
	            ],
	            "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/947552351698632704/pu/img/ubAEqzpvWkc-d0pD.jpg",
	            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/947552351698632704/pu/img/ubAEqzpvWkc-d0pD.jpg",
	            "url": "https://t.co/o9AMAKX3L8",
	            "display_url": "pic.twitter.com/o9AMAKX3L8",
	            "expanded_url": "https://twitter.com/RoyPurdy/status/947552487170457600/video/1",
	            "type": "video",
	            "sizes": {
	              "thumb": {
	                "w": 150,
	                "h": 150,
	                "resize": "crop"
	              },
	              "small": {
	                "w": 680,
	                "h": 680,
	                "resize": "fit"
	              },
	              "medium": {
	                "w": 720,
	                "h": 720,
	                "resize": "fit"
	              },
	              "large": {
	                "w": 720,
	                "h": 720,
	                "resize": "fit"
	              }
	            },
	            "source_status_id": 947552487170457600,
	            "source_status_id_str": "947552487170457600",
	            "source_user_id": 2439286387,
	            "source_user_id_str": "2439286387",
	            "video_info": {
	              "aspect_ratio": [
	                1,
	                1
	              ],
	              "duration_millis": 34367,
	              "variants": [
	                {
	                  "content_type": "application/x-mpegURL",
	                  "url": "https://video.twimg.com/ext_tw_video/947552351698632704/pu/pl/aG_VmxryVjKlcsLz.m3u8"
	                },
	                {
	                  "bitrate": 1280000,
	                  "content_type": "video/mp4",
	                  "url": "https://video.twimg.com/ext_tw_video/947552351698632704/pu/vid/720x720/Y6lwlTAcOI_Kv1cv.mp4"
	                },
	                {
	                  "bitrate": 320000,
	                  "content_type": "video/mp4",
	                  "url": "https://video.twimg.com/ext_tw_video/947552351698632704/pu/vid/240x240/NxzPP--hpFICy2B0.mp4"
	                },
	                {
	                  "bitrate": 832000,
	                  "content_type": "video/mp4",
	                  "url": "https://video.twimg.com/ext_tw_video/947552351698632704/pu/vid/480x480/WeKJ2-bmc70bx8SX.mp4"
	                }
	              ]
	            },
	            "additional_media_info": {
	              "monetizable": false,
	              "source_user": {
	                "id": 2439286387,
	                "id_str": "2439286387",
	                "name": "ROY PURDY",
	                "screen_name": "RoyPurdy",
	                "location": "",
	                "description": "I make music and videos and wear cool sunglasses🕺 MERCH: https://t.co/ju1f21f9V8 mgmt: Sam@inArtists.co",
	                "url": "https://t.co/oJvyEblfnt",
	                "entities": {
	                  "url": {
	                    "urls": [
	                      {
	                        "url": "https://t.co/oJvyEblfnt",
	                        "expanded_url": "https://soundcloud.com/roy-purdy/roy-purdy-pink-and-green",
	                        "display_url": "soundcloud.com/roy-purdy/roy-…",
	                        "indices": [
	                          0,
	                          23
	                        ]
	                      }
	                    ]
	                  },
	                  "description": {
	                    "urls": [
	                      {
	                        "url": "https://t.co/ju1f21f9V8",
	                        "expanded_url": "http://roypurdy.bigcartel.com",
	                        "display_url": "roypurdy.bigcartel.com",
	                        "indices": [
	                          57,
	                          80
	                        ]
	                      }
	                    ]
	                  }
	                },
	                "protected": false,
	                "followers_count": 90537,
	                "friends_count": 3090,
	                "listed_count": 317,
	                "created_at": "Sat Apr 12 00:51:23 +0000 2014",
	                "favourites_count": 6078,
	                "utc_offset": -28800,
	                "time_zone": "Pacific Time (US & Canada)",
	                "geo_enabled": true,
	                "verified": false,
	                "statuses_count": 4044,
	                "lang": "en",
	                "contributors_enabled": false,
	                "is_translator": false,
	                "is_translation_enabled": false,
	                "profile_background_color": "000000",
	                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
	                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
	                "profile_background_tile": false,
	                "profile_image_url": "http://pbs.twimg.com/profile_images/940083730198048769/29FDsr2G_normal.jpg",
	                "profile_image_url_https": "https://pbs.twimg.com/profile_images/940083730198048769/29FDsr2G_normal.jpg",
	                "profile_banner_url": "https://pbs.twimg.com/profile_banners/2439286387/1511039328",
	                "profile_link_color": "E81C4F",
	                "profile_sidebar_border_color": "000000",
	                "profile_sidebar_fill_color": "000000",
	                "profile_text_color": "000000",
	                "profile_use_background_image": false,
	                "has_extended_profile": true,
	                "default_profile": false,
	                "default_profile_image": false,
	                "following": false,
	                "follow_request_sent": false,
	                "notifications": false,
	                "translator_type": "none"
	              }
	            }
	          }
	        ]
	      },
	      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	      "in_reply_to_status_id": null,
	      "in_reply_to_status_id_str": null,
	      "in_reply_to_user_id": null,
	      "in_reply_to_user_id_str": null,
	      "in_reply_to_screen_name": null,
	      "user": {
	        "id": 24623145,
	        "id_str": "24623145",
	        "name": "Steve Dangle Glynn",
	        "screen_name": "Steve_Dangle",
	        "location": "Toronto",
	        "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	        "url": "https://t.co/INunLgk3Dn",
	        "entities": {
	          "url": {
	            "urls": [
	              {
	                "url": "https://t.co/INunLgk3Dn",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                "indices": [
	                  0,
	                  23
	                ]
	              }
	            ]
	          },
	          "description": {
	            "urls": [
	              {
	                "url": "https://t.co/qJeHmofJLB",
	                "expanded_url": "http://theleafsnation.com",
	                "display_url": "theleafsnation.com",
	                "indices": [
	                  82,
	                  105
	                ]
	              }
	            ]
	          }
	        },
	        "protected": false,
	        "followers_count": 102987,
	        "friends_count": 2680,
	        "listed_count": 1166,
	        "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	        "favourites_count": 76053,
	        "utc_offset": -18000,
	        "time_zone": "Quito",
	        "geo_enabled": false,
	        "verified": true,
	        "statuses_count": 115689,
	        "lang": "en",
	        "contributors_enabled": false,
	        "is_translator": false,
	        "is_translation_enabled": false,
	        "profile_background_color": "1A1B1F",
	        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_tile": true,
	        "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	        "profile_link_color": "053EFA",
	        "profile_sidebar_border_color": "181A1E",
	        "profile_sidebar_fill_color": "252429",
	        "profile_text_color": "666666",
	        "profile_use_background_image": true,
	        "has_extended_profile": false,
	        "default_profile": false,
	        "default_profile_image": false,
	        "following": true,
	        "follow_request_sent": false,
	        "notifications": false,
	        "translator_type": "none"
	      },
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "retweeted_status": {
	        "created_at": "Sun Dec 31 19:38:12 +0000 2017",
	        "id": 947552487170457600,
	        "id_str": "947552487170457600",
	        "full_text": "Walking into 2018 like... https://t.co/o9AMAKX3L8",
	        "truncated": false,
	        "display_text_range": [
	          0,
	          25
	        ],
	        "entities": {
	          "hashtags": [],
	          "symbols": [],
	          "user_mentions": [],
	          "urls": [],
	          "media": [
	            {
	              "id": 947552351698632700,
	              "id_str": "947552351698632704",
	              "indices": [
	                26,
	                49
	              ],
	              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/947552351698632704/pu/img/ubAEqzpvWkc-d0pD.jpg",
	              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/947552351698632704/pu/img/ubAEqzpvWkc-d0pD.jpg",
	              "url": "https://t.co/o9AMAKX3L8",
	              "display_url": "pic.twitter.com/o9AMAKX3L8",
	              "expanded_url": "https://twitter.com/RoyPurdy/status/947552487170457600/video/1",
	              "type": "photo",
	              "sizes": {
	                "thumb": {
	                  "w": 150,
	                  "h": 150,
	                  "resize": "crop"
	                },
	                "small": {
	                  "w": 680,
	                  "h": 680,
	                  "resize": "fit"
	                },
	                "medium": {
	                  "w": 720,
	                  "h": 720,
	                  "resize": "fit"
	                },
	                "large": {
	                  "w": 720,
	                  "h": 720,
	                  "resize": "fit"
	                }
	              }
	            }
	          ]
	        },
	        "extended_entities": {
	          "media": [
	            {
	              "id": 947552351698632700,
	              "id_str": "947552351698632704",
	              "indices": [
	                26,
	                49
	              ],
	              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/947552351698632704/pu/img/ubAEqzpvWkc-d0pD.jpg",
	              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/947552351698632704/pu/img/ubAEqzpvWkc-d0pD.jpg",
	              "url": "https://t.co/o9AMAKX3L8",
	              "display_url": "pic.twitter.com/o9AMAKX3L8",
	              "expanded_url": "https://twitter.com/RoyPurdy/status/947552487170457600/video/1",
	              "type": "video",
	              "sizes": {
	                "thumb": {
	                  "w": 150,
	                  "h": 150,
	                  "resize": "crop"
	                },
	                "small": {
	                  "w": 680,
	                  "h": 680,
	                  "resize": "fit"
	                },
	                "medium": {
	                  "w": 720,
	                  "h": 720,
	                  "resize": "fit"
	                },
	                "large": {
	                  "w": 720,
	                  "h": 720,
	                  "resize": "fit"
	                }
	              },
	              "video_info": {
	                "aspect_ratio": [
	                  1,
	                  1
	                ],
	                "duration_millis": 34367,
	                "variants": [
	                  {
	                    "content_type": "application/x-mpegURL",
	                    "url": "https://video.twimg.com/ext_tw_video/947552351698632704/pu/pl/aG_VmxryVjKlcsLz.m3u8"
	                  },
	                  {
	                    "bitrate": 1280000,
	                    "content_type": "video/mp4",
	                    "url": "https://video.twimg.com/ext_tw_video/947552351698632704/pu/vid/720x720/Y6lwlTAcOI_Kv1cv.mp4"
	                  },
	                  {
	                    "bitrate": 320000,
	                    "content_type": "video/mp4",
	                    "url": "https://video.twimg.com/ext_tw_video/947552351698632704/pu/vid/240x240/NxzPP--hpFICy2B0.mp4"
	                  },
	                  {
	                    "bitrate": 832000,
	                    "content_type": "video/mp4",
	                    "url": "https://video.twimg.com/ext_tw_video/947552351698632704/pu/vid/480x480/WeKJ2-bmc70bx8SX.mp4"
	                  }
	                ]
	              },
	              "additional_media_info": {
	                "monetizable": false
	              }
	            }
	          ]
	        },
	        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	        "in_reply_to_status_id": null,
	        "in_reply_to_status_id_str": null,
	        "in_reply_to_user_id": null,
	        "in_reply_to_user_id_str": null,
	        "in_reply_to_screen_name": null,
	        "user": {
	          "id": 2439286387,
	          "id_str": "2439286387",
	          "name": "ROY PURDY",
	          "screen_name": "RoyPurdy",
	          "location": "",
	          "description": "I make music and videos and wear cool sunglasses🕺 MERCH: https://t.co/ju1f21f9V8 mgmt: Sam@inArtists.co",
	          "url": "https://t.co/oJvyEblfnt",
	          "entities": {
	            "url": {
	              "urls": [
	                {
	                  "url": "https://t.co/oJvyEblfnt",
	                  "expanded_url": "https://soundcloud.com/roy-purdy/roy-purdy-pink-and-green",
	                  "display_url": "soundcloud.com/roy-purdy/roy-…",
	                  "indices": [
	                    0,
	                    23
	                  ]
	                }
	              ]
	            },
	            "description": {
	              "urls": [
	                {
	                  "url": "https://t.co/ju1f21f9V8",
	                  "expanded_url": "http://roypurdy.bigcartel.com",
	                  "display_url": "roypurdy.bigcartel.com",
	                  "indices": [
	                    57,
	                    80
	                  ]
	                }
	              ]
	            }
	          },
	          "protected": false,
	          "followers_count": 90537,
	          "friends_count": 3090,
	          "listed_count": 317,
	          "created_at": "Sat Apr 12 00:51:23 +0000 2014",
	          "favourites_count": 6078,
	          "utc_offset": -28800,
	          "time_zone": "Pacific Time (US & Canada)",
	          "geo_enabled": true,
	          "verified": false,
	          "statuses_count": 4044,
	          "lang": "en",
	          "contributors_enabled": false,
	          "is_translator": false,
	          "is_translation_enabled": false,
	          "profile_background_color": "000000",
	          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
	          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
	          "profile_background_tile": false,
	          "profile_image_url": "http://pbs.twimg.com/profile_images/940083730198048769/29FDsr2G_normal.jpg",
	          "profile_image_url_https": "https://pbs.twimg.com/profile_images/940083730198048769/29FDsr2G_normal.jpg",
	          "profile_banner_url": "https://pbs.twimg.com/profile_banners/2439286387/1511039328",
	          "profile_link_color": "E81C4F",
	          "profile_sidebar_border_color": "000000",
	          "profile_sidebar_fill_color": "000000",
	          "profile_text_color": "000000",
	          "profile_use_background_image": false,
	          "has_extended_profile": true,
	          "default_profile": false,
	          "default_profile_image": false,
	          "following": false,
	          "follow_request_sent": false,
	          "notifications": false,
	          "translator_type": "none"
	        },
	        "geo": null,
	        "coordinates": null,
	        "place": null,
	        "contributors": null,
	        "is_quote_status": false,
	        "retweet_count": 174069,
	        "favorite_count": 293519,
	        "favorited": false,
	        "retweeted": false,
	        "possibly_sensitive": false,
	        "lang": "en",
	        "retweeteduser": {
	          "id": 24623145,
	          "id_str": "24623145",
	          "name": "Steve Dangle Glynn",
	          "screen_name": "Steve_Dangle",
	          "location": "Toronto",
	          "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	          "url": "https://t.co/INunLgk3Dn",
	          "entities": {
	            "url": {
	              "urls": [
	                {
	                  "url": "https://t.co/INunLgk3Dn",
	                  "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                  "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                  "indices": [
	                    0,
	                    23
	                  ]
	                }
	              ]
	            },
	            "description": {
	              "urls": [
	                {
	                  "url": "https://t.co/qJeHmofJLB",
	                  "expanded_url": "http://theleafsnation.com",
	                  "display_url": "theleafsnation.com",
	                  "indices": [
	                    82,
	                    105
	                  ]
	                }
	              ]
	            }
	          },
	          "protected": false,
	          "followers_count": 102987,
	          "friends_count": 2680,
	          "listed_count": 1166,
	          "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	          "favourites_count": 76053,
	          "utc_offset": -18000,
	          "time_zone": "Quito",
	          "geo_enabled": false,
	          "verified": true,
	          "statuses_count": 115689,
	          "lang": "en",
	          "contributors_enabled": false,
	          "is_translator": false,
	          "is_translation_enabled": false,
	          "profile_background_color": "1A1B1F",
	          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	          "profile_background_tile": true,
	          "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	          "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	          "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	          "profile_link_color": "053EFA",
	          "profile_sidebar_border_color": "181A1E",
	          "profile_sidebar_fill_color": "252429",
	          "profile_text_color": "666666",
	          "profile_use_background_image": true,
	          "has_extended_profile": false,
	          "default_profile": false,
	          "default_profile_image": false,
	          "following": true,
	          "follow_request_sent": false,
	          "notifications": false,
	          "translator_type": "none"
	        }
	      },
	      "is_quote_status": false,
	      "retweet_count": 174069,
	      "favorite_count": 0,
	      "favorited": false,
	      "retweeted": false,
	      "possibly_sensitive": false,
	      "lang": "en",
	      "selected": ""
	    },
	    {
	      "created_at": "Mon Jan 01 18:50:22 +0000 2018",
	      "id": 947902837803159600,
	      "id_str": "947902837803159552",
	      "full_text": "RT @EricEngels: Asked Max Pacioretty how he can block out reports and trade rumours when the reality the Canadiens are facing, being so far…",
	      "truncated": false,
	      "display_text_range": [
	        0,
	        140
	      ],
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [
	          {
	            "screen_name": "EricEngels",
	            "name": "Eric Engels",
	            "id": 20568854,
	            "id_str": "20568854",
	            "indices": [
	              3,
	              14
	            ]
	          }
	        ],
	        "urls": []
	      },
	      "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
	      "in_reply_to_status_id": null,
	      "in_reply_to_status_id_str": null,
	      "in_reply_to_user_id": null,
	      "in_reply_to_user_id_str": null,
	      "in_reply_to_screen_name": null,
	      "user": {
	        "id": 24623145,
	        "id_str": "24623145",
	        "name": "Steve Dangle Glynn",
	        "screen_name": "Steve_Dangle",
	        "location": "Toronto",
	        "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	        "url": "https://t.co/INunLgk3Dn",
	        "entities": {
	          "url": {
	            "urls": [
	              {
	                "url": "https://t.co/INunLgk3Dn",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                "indices": [
	                  0,
	                  23
	                ]
	              }
	            ]
	          },
	          "description": {
	            "urls": [
	              {
	                "url": "https://t.co/qJeHmofJLB",
	                "expanded_url": "http://theleafsnation.com",
	                "display_url": "theleafsnation.com",
	                "indices": [
	                  82,
	                  105
	                ]
	              }
	            ]
	          }
	        },
	        "protected": false,
	        "followers_count": 102987,
	        "friends_count": 2680,
	        "listed_count": 1166,
	        "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	        "favourites_count": 76053,
	        "utc_offset": -18000,
	        "time_zone": "Quito",
	        "geo_enabled": false,
	        "verified": true,
	        "statuses_count": 115689,
	        "lang": "en",
	        "contributors_enabled": false,
	        "is_translator": false,
	        "is_translation_enabled": false,
	        "profile_background_color": "1A1B1F",
	        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_tile": true,
	        "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	        "profile_link_color": "053EFA",
	        "profile_sidebar_border_color": "181A1E",
	        "profile_sidebar_fill_color": "252429",
	        "profile_text_color": "666666",
	        "profile_use_background_image": true,
	        "has_extended_profile": false,
	        "default_profile": false,
	        "default_profile_image": false,
	        "following": true,
	        "follow_request_sent": false,
	        "notifications": false,
	        "translator_type": "none"
	      },
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "retweeted_status": {
	        "created_at": "Mon Jan 01 18:50:05 +0000 2018",
	        "id": 947902768286715900,
	        "id_str": "947902768286715904",
	        "full_text": "Asked Max Pacioretty how he can block out reports and trade rumours when the reality the Canadiens are facing, being so far out of the playoff picture, ensures they will not subside. His response: https://t.co/H0h3X0OL1c",
	        "truncated": false,
	        "display_text_range": [
	          0,
	          196
	        ],
	        "entities": {
	          "hashtags": [],
	          "symbols": [],
	          "user_mentions": [],
	          "urls": [],
	          "media": [
	            {
	              "id": 947902759172390900,
	              "id_str": "947902759172390912",
	              "indices": [
	                197,
	                220
	              ],
	              "media_url": "http://pbs.twimg.com/media/DSegiYoVQAAfRFV.jpg",
	              "media_url_https": "https://pbs.twimg.com/media/DSegiYoVQAAfRFV.jpg",
	              "url": "https://t.co/H0h3X0OL1c",
	              "display_url": "pic.twitter.com/H0h3X0OL1c",
	              "expanded_url": "https://twitter.com/EricEngels/status/947902768286715904/photo/1",
	              "type": "photo",
	              "sizes": {
	                "thumb": {
	                  "w": 150,
	                  "h": 150,
	                  "resize": "crop"
	                },
	                "large": {
	                  "w": 795,
	                  "h": 186,
	                  "resize": "fit"
	                },
	                "medium": {
	                  "w": 795,
	                  "h": 186,
	                  "resize": "fit"
	                },
	                "small": {
	                  "w": 680,
	                  "h": 159,
	                  "resize": "fit"
	                }
	              }
	            }
	          ]
	        },
	        "extended_entities": {
	          "media": [
	            {
	              "id": 947902759172390900,
	              "id_str": "947902759172390912",
	              "indices": [
	                197,
	                220
	              ],
	              "media_url": "http://pbs.twimg.com/media/DSegiYoVQAAfRFV.jpg",
	              "media_url_https": "https://pbs.twimg.com/media/DSegiYoVQAAfRFV.jpg",
	              "url": "https://t.co/H0h3X0OL1c",
	              "display_url": "pic.twitter.com/H0h3X0OL1c",
	              "expanded_url": "https://twitter.com/EricEngels/status/947902768286715904/photo/1",
	              "type": "photo",
	              "sizes": {
	                "thumb": {
	                  "w": 150,
	                  "h": 150,
	                  "resize": "crop"
	                },
	                "large": {
	                  "w": 795,
	                  "h": 186,
	                  "resize": "fit"
	                },
	                "medium": {
	                  "w": 795,
	                  "h": 186,
	                  "resize": "fit"
	                },
	                "small": {
	                  "w": 680,
	                  "h": 159,
	                  "resize": "fit"
	                }
	              }
	            }
	          ]
	        },
	        "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
	        "in_reply_to_status_id": null,
	        "in_reply_to_status_id_str": null,
	        "in_reply_to_user_id": null,
	        "in_reply_to_user_id_str": null,
	        "in_reply_to_screen_name": null,
	        "user": {
	          "id": 20568854,
	          "id_str": "20568854",
	          "name": "Eric Engels",
	          "screen_name": "EricEngels",
	          "location": "Montreal, Quebec",
	          "description": "Writer/TV/Radio Reporter for Rogers Sportsnet. Montreal Canadiens/NHL Beat @Sportsnet. Proud member of the PHWA. Instagram: @eehabs",
	          "url": "https://t.co/V7ulJBObLc",
	          "entities": {
	            "url": {
	              "urls": [
	                {
	                  "url": "https://t.co/V7ulJBObLc",
	                  "expanded_url": "http://www.sportsnet.ca/author/eric-engels/",
	                  "display_url": "sportsnet.ca/author/eric-en…",
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
	          "followers_count": 42735,
	          "friends_count": 2079,
	          "listed_count": 839,
	          "created_at": "Wed Feb 11 03:35:49 +0000 2009",
	          "favourites_count": 5086,
	          "utc_offset": -18000,
	          "time_zone": "Quito",
	          "geo_enabled": false,
	          "verified": true,
	          "statuses_count": 56679,
	          "lang": "en",
	          "contributors_enabled": false,
	          "is_translator": false,
	          "is_translation_enabled": false,
	          "profile_background_color": "1A1B1F",
	          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/63781171/eeee.jpg",
	          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/63781171/eeee.jpg",
	          "profile_background_tile": false,
	          "profile_image_url": "http://pbs.twimg.com/profile_images/919744273117057025/5xe4GxhW_normal.jpg",
	          "profile_image_url_https": "https://pbs.twimg.com/profile_images/919744273117057025/5xe4GxhW_normal.jpg",
	          "profile_banner_url": "https://pbs.twimg.com/profile_banners/20568854/1493608453",
	          "profile_link_color": "3B94D9",
	          "profile_sidebar_border_color": "181A1E",
	          "profile_sidebar_fill_color": "252429",
	          "profile_text_color": "666666",
	          "profile_use_background_image": true,
	          "has_extended_profile": true,
	          "default_profile": false,
	          "default_profile_image": false,
	          "following": false,
	          "follow_request_sent": false,
	          "notifications": false,
	          "translator_type": "none"
	        },
	        "geo": null,
	        "coordinates": null,
	        "place": null,
	        "contributors": null,
	        "is_quote_status": false,
	        "retweet_count": 38,
	        "favorite_count": 121,
	        "favorited": false,
	        "retweeted": false,
	        "possibly_sensitive": false,
	        "lang": "en",
	        "retweeteduser": {
	          "id": 24623145,
	          "id_str": "24623145",
	          "name": "Steve Dangle Glynn",
	          "screen_name": "Steve_Dangle",
	          "location": "Toronto",
	          "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	          "url": "https://t.co/INunLgk3Dn",
	          "entities": {
	            "url": {
	              "urls": [
	                {
	                  "url": "https://t.co/INunLgk3Dn",
	                  "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                  "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                  "indices": [
	                    0,
	                    23
	                  ]
	                }
	              ]
	            },
	            "description": {
	              "urls": [
	                {
	                  "url": "https://t.co/qJeHmofJLB",
	                  "expanded_url": "http://theleafsnation.com",
	                  "display_url": "theleafsnation.com",
	                  "indices": [
	                    82,
	                    105
	                  ]
	                }
	              ]
	            }
	          },
	          "protected": false,
	          "followers_count": 102987,
	          "friends_count": 2680,
	          "listed_count": 1166,
	          "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	          "favourites_count": 76053,
	          "utc_offset": -18000,
	          "time_zone": "Quito",
	          "geo_enabled": false,
	          "verified": true,
	          "statuses_count": 115689,
	          "lang": "en",
	          "contributors_enabled": false,
	          "is_translator": false,
	          "is_translation_enabled": false,
	          "profile_background_color": "1A1B1F",
	          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	          "profile_background_tile": true,
	          "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	          "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	          "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	          "profile_link_color": "053EFA",
	          "profile_sidebar_border_color": "181A1E",
	          "profile_sidebar_fill_color": "252429",
	          "profile_text_color": "666666",
	          "profile_use_background_image": true,
	          "has_extended_profile": false,
	          "default_profile": false,
	          "default_profile_image": false,
	          "following": true,
	          "follow_request_sent": false,
	          "notifications": false,
	          "translator_type": "none"
	        }
	      },
	      "is_quote_status": false,
	      "retweet_count": 38,
	      "favorite_count": 0,
	      "favorited": false,
	      "retweeted": false,
	      "lang": "en",
	      "selected": ""
	    },
	    {
	      "created_at": "Mon Jan 01 18:21:28 +0000 2018",
	      "id": 947895566599688200,
	      "id_str": "947895566599688192",
	      "full_text": "RT @GoldenKnights: if you ever wanted to take a look from the other side about what it's like to play in vegas, this is a GREAT watch😂 http…",
	      "truncated": false,
	      "display_text_range": [
	        0,
	        140
	      ],
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [
	          {
	            "screen_name": "GoldenKnights",
	            "name": "Vegas Golden Knights",
	            "id": 743155992997691400,
	            "id_str": "743155992997691392",
	            "indices": [
	              3,
	              17
	            ]
	          }
	        ],
	        "urls": []
	      },
	      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	      "in_reply_to_status_id": null,
	      "in_reply_to_status_id_str": null,
	      "in_reply_to_user_id": null,
	      "in_reply_to_user_id_str": null,
	      "in_reply_to_screen_name": null,
	      "user": {
	        "id": 24623145,
	        "id_str": "24623145",
	        "name": "Steve Dangle Glynn",
	        "screen_name": "Steve_Dangle",
	        "location": "Toronto",
	        "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	        "url": "https://t.co/INunLgk3Dn",
	        "entities": {
	          "url": {
	            "urls": [
	              {
	                "url": "https://t.co/INunLgk3Dn",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                "indices": [
	                  0,
	                  23
	                ]
	              }
	            ]
	          },
	          "description": {
	            "urls": [
	              {
	                "url": "https://t.co/qJeHmofJLB",
	                "expanded_url": "http://theleafsnation.com",
	                "display_url": "theleafsnation.com",
	                "indices": [
	                  82,
	                  105
	                ]
	              }
	            ]
	          }
	        },
	        "protected": false,
	        "followers_count": 102987,
	        "friends_count": 2680,
	        "listed_count": 1166,
	        "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	        "favourites_count": 76053,
	        "utc_offset": -18000,
	        "time_zone": "Quito",
	        "geo_enabled": false,
	        "verified": true,
	        "statuses_count": 115689,
	        "lang": "en",
	        "contributors_enabled": false,
	        "is_translator": false,
	        "is_translation_enabled": false,
	        "profile_background_color": "1A1B1F",
	        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_tile": true,
	        "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	        "profile_link_color": "053EFA",
	        "profile_sidebar_border_color": "181A1E",
	        "profile_sidebar_fill_color": "252429",
	        "profile_text_color": "666666",
	        "profile_use_background_image": true,
	        "has_extended_profile": false,
	        "default_profile": false,
	        "default_profile_image": false,
	        "following": true,
	        "follow_request_sent": false,
	        "notifications": false,
	        "translator_type": "none"
	      },
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "retweeted_status": {
	        "created_at": "Mon Jan 01 18:04:12 +0000 2018",
	        "id": 947891220558184400,
	        "id_str": "947891220558184449",
	        "full_text": "if you ever wanted to take a look from the other side about what it's like to play in vegas, this is a GREAT watch😂 https://t.co/Q1huacN72f",
	        "truncated": false,
	        "display_text_range": [
	          0,
	          115
	        ],
	        "entities": {
	          "hashtags": [],
	          "symbols": [],
	          "user_mentions": [],
	          "urls": [
	            {
	              "url": "https://t.co/Q1huacN72f",
	              "expanded_url": "https://twitter.com/Steve_Dangle/status/947674979239313409",
	              "display_url": "twitter.com/Steve_Dangle/s…",
	              "indices": [
	                116,
	                139
	              ]
	            }
	          ]
	        },
	        "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
	        "in_reply_to_status_id": null,
	        "in_reply_to_status_id_str": null,
	        "in_reply_to_user_id": null,
	        "in_reply_to_user_id_str": null,
	        "in_reply_to_screen_name": null,
	        "user": {
	          "id": 743155992997691400,
	          "id_str": "743155992997691392",
	          "name": "Vegas Golden Knights",
	          "screen_name": "GoldenKnights",
	          "location": "Las Vegas, NV",
	          "description": "The official Twitter of the Vegas Golden Knights, the NHL's newest team. Proud member of the league's original 31. #VegasBorn",
	          "url": "https://t.co/jdki9pM7gq",
	          "entities": {
	            "url": {
	              "urls": [
	                {
	                  "url": "https://t.co/jdki9pM7gq",
	                  "expanded_url": "http://nhl.com/goldenknights",
	                  "display_url": "nhl.com/goldenknights",
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
	          "followers_count": 272262,
	          "friends_count": 575,
	          "listed_count": 1281,
	          "created_at": "Wed Jun 15 18:59:30 +0000 2016",
	          "favourites_count": 6229,
	          "utc_offset": -28800,
	          "time_zone": "Pacific Time (US & Canada)",
	          "geo_enabled": true,
	          "verified": true,
	          "statuses_count": 10319,
	          "lang": "en",
	          "contributors_enabled": false,
	          "is_translator": false,
	          "is_translation_enabled": false,
	          "profile_background_color": "F5F8FA",
	          "profile_background_image_url": null,
	          "profile_background_image_url_https": null,
	          "profile_background_tile": false,
	          "profile_image_url": "http://pbs.twimg.com/profile_images/936650865267458049/bMofwRsw_normal.jpg",
	          "profile_image_url_https": "https://pbs.twimg.com/profile_images/936650865267458049/bMofwRsw_normal.jpg",
	          "profile_banner_url": "https://pbs.twimg.com/profile_banners/743155992997691392/1507493175",
	          "profile_link_color": "1DA1F2",
	          "profile_sidebar_border_color": "C0DEED",
	          "profile_sidebar_fill_color": "DDEEF6",
	          "profile_text_color": "333333",
	          "profile_use_background_image": true,
	          "has_extended_profile": false,
	          "default_profile": true,
	          "default_profile_image": false,
	          "following": false,
	          "follow_request_sent": false,
	          "notifications": false,
	          "translator_type": "none"
	        },
	        "geo": null,
	        "coordinates": null,
	        "place": null,
	        "contributors": null,
	        "is_quote_status": true,
	        "quoted_status_id": 947674979239313400,
	        "quoted_status_id_str": "947674979239313409",
	        "quoted_status": {
	          "created_at": "Mon Jan 01 03:44:56 +0000 2018",
	          "id": 947674979239313400,
	          "id_str": "947674979239313409",
	          "full_text": "The new LFR video is up! For the Leafs, it was a bad game but a great year. https://t.co/hCqIMP9sho",
	          "truncated": false,
	          "display_text_range": [
	            0,
	            99
	          ],
	          "entities": {
	            "hashtags": [],
	            "symbols": [],
	            "user_mentions": [],
	            "urls": [
	              {
	                "url": "https://t.co/hCqIMP9sho",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/lfr11-game-40-craps/",
	                "display_url": "sportsnet.ca/hockey/nhl/lfr…",
	                "indices": [
	                  76,
	                  99
	                ]
	              }
	            ]
	          },
	          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	          "in_reply_to_status_id": null,
	          "in_reply_to_status_id_str": null,
	          "in_reply_to_user_id": null,
	          "in_reply_to_user_id_str": null,
	          "in_reply_to_screen_name": null,
	          "user": {
	            "id": 24623145,
	            "id_str": "24623145",
	            "name": "Steve Dangle Glynn",
	            "screen_name": "Steve_Dangle",
	            "location": "Toronto",
	            "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	            "url": "https://t.co/INunLgk3Dn",
	            "entities": {
	              "url": {
	                "urls": [
	                  {
	                    "url": "https://t.co/INunLgk3Dn",
	                    "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                    "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                    "indices": [
	                      0,
	                      23
	                    ]
	                  }
	                ]
	              },
	              "description": {
	                "urls": [
	                  {
	                    "url": "https://t.co/qJeHmofJLB",
	                    "expanded_url": "http://theleafsnation.com",
	                    "display_url": "theleafsnation.com",
	                    "indices": [
	                      82,
	                      105
	                    ]
	                  }
	                ]
	              }
	            },
	            "protected": false,
	            "followers_count": 102987,
	            "friends_count": 2680,
	            "listed_count": 1166,
	            "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	            "favourites_count": 76053,
	            "utc_offset": -18000,
	            "time_zone": "Quito",
	            "geo_enabled": false,
	            "verified": true,
	            "statuses_count": 115689,
	            "lang": "en",
	            "contributors_enabled": false,
	            "is_translator": false,
	            "is_translation_enabled": false,
	            "profile_background_color": "1A1B1F",
	            "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	            "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	            "profile_background_tile": true,
	            "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	            "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	            "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	            "profile_link_color": "053EFA",
	            "profile_sidebar_border_color": "181A1E",
	            "profile_sidebar_fill_color": "252429",
	            "profile_text_color": "666666",
	            "profile_use_background_image": true,
	            "has_extended_profile": false,
	            "default_profile": false,
	            "default_profile_image": false,
	            "following": true,
	            "follow_request_sent": false,
	            "notifications": false,
	            "translator_type": "none"
	          },
	          "geo": null,
	          "coordinates": null,
	          "place": null,
	          "contributors": null,
	          "is_quote_status": false,
	          "retweet_count": 21,
	          "favorite_count": 149,
	          "favorited": false,
	          "retweeted": false,
	          "possibly_sensitive": false,
	          "lang": "en"
	        },
	        "retweet_count": 50,
	        "favorite_count": 465,
	        "favorited": false,
	        "retweeted": false,
	        "possibly_sensitive": false,
	        "lang": "en",
	        "retweeteduser": {
	          "id": 24623145,
	          "id_str": "24623145",
	          "name": "Steve Dangle Glynn",
	          "screen_name": "Steve_Dangle",
	          "location": "Toronto",
	          "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	          "url": "https://t.co/INunLgk3Dn",
	          "entities": {
	            "url": {
	              "urls": [
	                {
	                  "url": "https://t.co/INunLgk3Dn",
	                  "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                  "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                  "indices": [
	                    0,
	                    23
	                  ]
	                }
	              ]
	            },
	            "description": {
	              "urls": [
	                {
	                  "url": "https://t.co/qJeHmofJLB",
	                  "expanded_url": "http://theleafsnation.com",
	                  "display_url": "theleafsnation.com",
	                  "indices": [
	                    82,
	                    105
	                  ]
	                }
	              ]
	            }
	          },
	          "protected": false,
	          "followers_count": 102987,
	          "friends_count": 2680,
	          "listed_count": 1166,
	          "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	          "favourites_count": 76053,
	          "utc_offset": -18000,
	          "time_zone": "Quito",
	          "geo_enabled": false,
	          "verified": true,
	          "statuses_count": 115689,
	          "lang": "en",
	          "contributors_enabled": false,
	          "is_translator": false,
	          "is_translation_enabled": false,
	          "profile_background_color": "1A1B1F",
	          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	          "profile_background_tile": true,
	          "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	          "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	          "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	          "profile_link_color": "053EFA",
	          "profile_sidebar_border_color": "181A1E",
	          "profile_sidebar_fill_color": "252429",
	          "profile_text_color": "666666",
	          "profile_use_background_image": true,
	          "has_extended_profile": false,
	          "default_profile": false,
	          "default_profile_image": false,
	          "following": true,
	          "follow_request_sent": false,
	          "notifications": false,
	          "translator_type": "none"
	        }
	      },
	      "is_quote_status": true,
	      "quoted_status_id": 947674979239313400,
	      "quoted_status_id_str": "947674979239313409",
	      "retweet_count": 50,
	      "favorite_count": 0,
	      "favorited": false,
	      "retweeted": false,
	      "lang": "en",
	      "selected": ""
	    },
	    {
	      "created_at": "Mon Jan 01 17:02:25 +0000 2018",
	      "id": 947875673695236100,
	      "id_str": "947875673695236097",
	      "full_text": "@jpat96 @MrsDangle I used @StaplesCanada",
	      "truncated": false,
	      "display_text_range": [
	        19,
	        40
	      ],
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [
	          {
	            "screen_name": "jpat96",
	            "name": "Jack",
	            "id": 411854658,
	            "id_str": "411854658",
	            "indices": [
	              0,
	              7
	            ]
	          },
	          {
	            "screen_name": "MrsDangle",
	            "name": "Mrs. Dangle",
	            "id": 595162869,
	            "id_str": "595162869",
	            "indices": [
	              8,
	              18
	            ]
	          },
	          {
	            "screen_name": "StaplesCanada",
	            "name": "Staples Canada",
	            "id": 182914092,
	            "id_str": "182914092",
	            "indices": [
	              26,
	              40
	            ]
	          }
	        ],
	        "urls": []
	      },
	      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	      "in_reply_to_status_id": 947870543398674400,
	      "in_reply_to_status_id_str": "947870543398674432",
	      "in_reply_to_user_id": 411854658,
	      "in_reply_to_user_id_str": "411854658",
	      "in_reply_to_screen_name": "jpat96",
	      "user": {
	        "id": 24623145,
	        "id_str": "24623145",
	        "name": "Steve Dangle Glynn",
	        "screen_name": "Steve_Dangle",
	        "location": "Toronto",
	        "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	        "url": "https://t.co/INunLgk3Dn",
	        "entities": {
	          "url": {
	            "urls": [
	              {
	                "url": "https://t.co/INunLgk3Dn",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                "indices": [
	                  0,
	                  23
	                ]
	              }
	            ]
	          },
	          "description": {
	            "urls": [
	              {
	                "url": "https://t.co/qJeHmofJLB",
	                "expanded_url": "http://theleafsnation.com",
	                "display_url": "theleafsnation.com",
	                "indices": [
	                  82,
	                  105
	                ]
	              }
	            ]
	          }
	        },
	        "protected": false,
	        "followers_count": 102987,
	        "friends_count": 2680,
	        "listed_count": 1166,
	        "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	        "favourites_count": 76053,
	        "utc_offset": -18000,
	        "time_zone": "Quito",
	        "geo_enabled": false,
	        "verified": true,
	        "statuses_count": 115689,
	        "lang": "en",
	        "contributors_enabled": false,
	        "is_translator": false,
	        "is_translation_enabled": false,
	        "profile_background_color": "1A1B1F",
	        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_tile": true,
	        "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	        "profile_link_color": "053EFA",
	        "profile_sidebar_border_color": "181A1E",
	        "profile_sidebar_fill_color": "252429",
	        "profile_text_color": "666666",
	        "profile_use_background_image": true,
	        "has_extended_profile": false,
	        "default_profile": false,
	        "default_profile_image": false,
	        "following": true,
	        "follow_request_sent": false,
	        "notifications": false,
	        "translator_type": "none"
	      },
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "is_quote_status": false,
	      "retweet_count": 0,
	      "favorite_count": 1,
	      "favorited": false,
	      "retweeted": false,
	      "lang": "en",
	      "selected": ""
	    },
	    {
	      "created_at": "Mon Jan 01 16:19:42 +0000 2018",
	      "id": 947864921836007400,
	      "id_str": "947864921836007427",
	      "full_text": "@BlakeyWheels @MrsDangle He’s in her poooool",
	      "truncated": false,
	      "display_text_range": [
	        25,
	        44
	      ],
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [
	          {
	            "screen_name": "BlakeyWheels",
	            "name": "Blake Wheeler",
	            "id": 733095947991797800,
	            "id_str": "733095947991797761",
	            "indices": [
	              0,
	              13
	            ]
	          },
	          {
	            "screen_name": "MrsDangle",
	            "name": "Mrs. Dangle",
	            "id": 595162869,
	            "id_str": "595162869",
	            "indices": [
	              14,
	              24
	            ]
	          }
	        ],
	        "urls": []
	      },
	      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	      "in_reply_to_status_id": 947863629348577300,
	      "in_reply_to_status_id_str": "947863629348577280",
	      "in_reply_to_user_id": 733095947991797800,
	      "in_reply_to_user_id_str": "733095947991797761",
	      "in_reply_to_screen_name": "BlakeyWheels",
	      "user": {
	        "id": 24623145,
	        "id_str": "24623145",
	        "name": "Steve Dangle Glynn",
	        "screen_name": "Steve_Dangle",
	        "location": "Toronto",
	        "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	        "url": "https://t.co/INunLgk3Dn",
	        "entities": {
	          "url": {
	            "urls": [
	              {
	                "url": "https://t.co/INunLgk3Dn",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                "indices": [
	                  0,
	                  23
	                ]
	              }
	            ]
	          },
	          "description": {
	            "urls": [
	              {
	                "url": "https://t.co/qJeHmofJLB",
	                "expanded_url": "http://theleafsnation.com",
	                "display_url": "theleafsnation.com",
	                "indices": [
	                  82,
	                  105
	                ]
	              }
	            ]
	          }
	        },
	        "protected": false,
	        "followers_count": 102987,
	        "friends_count": 2680,
	        "listed_count": 1166,
	        "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	        "favourites_count": 76053,
	        "utc_offset": -18000,
	        "time_zone": "Quito",
	        "geo_enabled": false,
	        "verified": true,
	        "statuses_count": 115689,
	        "lang": "en",
	        "contributors_enabled": false,
	        "is_translator": false,
	        "is_translation_enabled": false,
	        "profile_background_color": "1A1B1F",
	        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_tile": true,
	        "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	        "profile_link_color": "053EFA",
	        "profile_sidebar_border_color": "181A1E",
	        "profile_sidebar_fill_color": "252429",
	        "profile_text_color": "666666",
	        "profile_use_background_image": true,
	        "has_extended_profile": false,
	        "default_profile": false,
	        "default_profile_image": false,
	        "following": true,
	        "follow_request_sent": false,
	        "notifications": false,
	        "translator_type": "none"
	      },
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "is_quote_status": false,
	      "retweet_count": 0,
	      "favorite_count": 3,
	      "favorited": false,
	      "retweeted": false,
	      "lang": "en",
	      "selected": ""
	    },
	    {
	      "created_at": "Mon Jan 01 16:18:15 +0000 2018",
	      "id": 947864556683927600,
	      "id_str": "947864556683927552",
	      "full_text": "I got it done at @StaplesCanada and I think I still have the file so in theory... yes, I think? https://t.co/2zJBBOWL4Z",
	      "truncated": false,
	      "display_text_range": [
	        0,
	        119
	      ],
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [
	          {
	            "screen_name": "StaplesCanada",
	            "name": "Staples Canada",
	            "id": 182914092,
	            "id_str": "182914092",
	            "indices": [
	              17,
	              31
	            ]
	          }
	        ],
	        "urls": [
	          {
	            "url": "https://t.co/2zJBBOWL4Z",
	            "expanded_url": "https://twitter.com/queeeen_dee/status/947863909431676928",
	            "display_url": "twitter.com/queeeen_dee/st…",
	            "indices": [
	              96,
	              119
	            ]
	          }
	        ]
	      },
	      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	      "in_reply_to_status_id": null,
	      "in_reply_to_status_id_str": null,
	      "in_reply_to_user_id": null,
	      "in_reply_to_user_id_str": null,
	      "in_reply_to_screen_name": null,
	      "user": {
	        "id": 24623145,
	        "id_str": "24623145",
	        "name": "Steve Dangle Glynn",
	        "screen_name": "Steve_Dangle",
	        "location": "Toronto",
	        "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	        "url": "https://t.co/INunLgk3Dn",
	        "entities": {
	          "url": {
	            "urls": [
	              {
	                "url": "https://t.co/INunLgk3Dn",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                "indices": [
	                  0,
	                  23
	                ]
	              }
	            ]
	          },
	          "description": {
	            "urls": [
	              {
	                "url": "https://t.co/qJeHmofJLB",
	                "expanded_url": "http://theleafsnation.com",
	                "display_url": "theleafsnation.com",
	                "indices": [
	                  82,
	                  105
	                ]
	              }
	            ]
	          }
	        },
	        "protected": false,
	        "followers_count": 102987,
	        "friends_count": 2680,
	        "listed_count": 1166,
	        "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	        "favourites_count": 76053,
	        "utc_offset": -18000,
	        "time_zone": "Quito",
	        "geo_enabled": false,
	        "verified": true,
	        "statuses_count": 115689,
	        "lang": "en",
	        "contributors_enabled": false,
	        "is_translator": false,
	        "is_translation_enabled": false,
	        "profile_background_color": "1A1B1F",
	        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_tile": true,
	        "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	        "profile_link_color": "053EFA",
	        "profile_sidebar_border_color": "181A1E",
	        "profile_sidebar_fill_color": "252429",
	        "profile_text_color": "666666",
	        "profile_use_background_image": true,
	        "has_extended_profile": false,
	        "default_profile": false,
	        "default_profile_image": false,
	        "following": true,
	        "follow_request_sent": false,
	        "notifications": false,
	        "translator_type": "none"
	      },
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "is_quote_status": true,
	      "quoted_status_id": 947863909431676900,
	      "quoted_status_id_str": "947863909431676928",
	      "quoted_status": {
	        "created_at": "Mon Jan 01 16:15:41 +0000 2018",
	        "id": 947863909431676900,
	        "id_str": "947863909431676928",
	        "full_text": "@Steve_Dangle @MrsDangle For purchase or... is this just a you guys thing 😭😅",
	        "truncated": false,
	        "display_text_range": [
	          25,
	          76
	        ],
	        "entities": {
	          "hashtags": [],
	          "symbols": [],
	          "user_mentions": [
	            {
	              "screen_name": "Steve_Dangle",
	              "name": "Steve Dangle Glynn",
	              "id": 24623145,
	              "id_str": "24623145",
	              "indices": [
	                0,
	                13
	              ]
	            },
	            {
	              "screen_name": "MrsDangle",
	              "name": "Mrs. Dangle",
	              "id": 595162869,
	              "id_str": "595162869",
	              "indices": [
	                14,
	                24
	              ]
	            }
	          ],
	          "urls": []
	        },
	        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	        "in_reply_to_status_id": 947863413744717800,
	        "in_reply_to_status_id_str": "947863413744717825",
	        "in_reply_to_user_id": 24623145,
	        "in_reply_to_user_id_str": "24623145",
	        "in_reply_to_screen_name": "Steve_Dangle",
	        "user": {
	          "id": 375991409,
	          "id_str": "375991409",
	          "name": "Danielle",
	          "screen_name": "queeeen_DEE",
	          "location": "",
	          "description": "MSU '14 🎓& UB '17🎓🐧(2017 champs) and 🔸◾️ 🏒insta➡️ _danielle_nic_✌🏾️i'm talking about Evgeni Malkin in my header 😊",
	          "url": null,
	          "entities": {
	            "description": {
	              "urls": []
	            }
	          },
	          "protected": false,
	          "followers_count": 270,
	          "friends_count": 260,
	          "listed_count": 7,
	          "created_at": "Mon Sep 19 03:19:56 +0000 2011",
	          "favourites_count": 37952,
	          "utc_offset": null,
	          "time_zone": null,
	          "geo_enabled": true,
	          "verified": false,
	          "statuses_count": 25346,
	          "lang": "en",
	          "contributors_enabled": false,
	          "is_translator": false,
	          "is_translation_enabled": false,
	          "profile_background_color": "0EE1F0",
	          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
	          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
	          "profile_background_tile": false,
	          "profile_image_url": "http://pbs.twimg.com/profile_images/943214326848081920/O38smNDU_normal.jpg",
	          "profile_image_url_https": "https://pbs.twimg.com/profile_images/943214326848081920/O38smNDU_normal.jpg",
	          "profile_banner_url": "https://pbs.twimg.com/profile_banners/375991409/1498431802",
	          "profile_link_color": "EDED09",
	          "profile_sidebar_border_color": "0CF082",
	          "profile_sidebar_fill_color": "DDEEF6",
	          "profile_text_color": "BD2457",
	          "profile_use_background_image": true,
	          "has_extended_profile": true,
	          "default_profile": false,
	          "default_profile_image": false,
	          "following": false,
	          "follow_request_sent": false,
	          "notifications": false,
	          "translator_type": "none"
	        },
	        "geo": null,
	        "coordinates": null,
	        "place": null,
	        "contributors": null,
	        "is_quote_status": false,
	        "retweet_count": 0,
	        "favorite_count": 2,
	        "favorited": false,
	        "retweeted": false,
	        "lang": "en"
	      },
	      "retweet_count": 0,
	      "favorite_count": 26,
	      "favorited": false,
	      "retweeted": false,
	      "possibly_sensitive": false,
	      "lang": "en",
	      "selected": ""
	    },
	    {
	      "created_at": "Mon Jan 01 16:13:42 +0000 2018",
	      "id": 947863413744717800,
	      "id_str": "947863413744717825",
	      "full_text": "I made @MrsDangle an Iggy &amp; Charlie calendar. https://t.co/CzaZSCx2av",
	      "truncated": false,
	      "display_text_range": [
	        0,
	        49
	      ],
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [
	          {
	            "screen_name": "MrsDangle",
	            "name": "Mrs. Dangle",
	            "id": 595162869,
	            "id_str": "595162869",
	            "indices": [
	              7,
	              17
	            ]
	          }
	        ],
	        "urls": [],
	        "media": [
	          {
	            "id": 947863400645771300,
	            "id_str": "947863400645771264",
	            "indices": [
	              50,
	              73
	            ],
	            "media_url": "http://pbs.twimg.com/media/DSd8vasVwAAQWph.jpg",
	            "media_url_https": "https://pbs.twimg.com/media/DSd8vasVwAAQWph.jpg",
	            "url": "https://t.co/CzaZSCx2av",
	            "display_url": "pic.twitter.com/CzaZSCx2av",
	            "expanded_url": "https://twitter.com/Steve_Dangle/status/947863413744717825/photo/1",
	            "type": "photo",
	            "sizes": {
	              "thumb": {
	                "w": 150,
	                "h": 150,
	                "resize": "crop"
	              },
	              "small": {
	                "w": 680,
	                "h": 510,
	                "resize": "fit"
	              },
	              "medium": {
	                "w": 1200,
	                "h": 900,
	                "resize": "fit"
	              },
	              "large": {
	                "w": 2048,
	                "h": 1536,
	                "resize": "fit"
	              }
	            }
	          }
	        ]
	      },
	      "extended_entities": {
	        "media": [
	          {
	            "id": 947863400645771300,
	            "id_str": "947863400645771264",
	            "indices": [
	              50,
	              73
	            ],
	            "media_url": "http://pbs.twimg.com/media/DSd8vasVwAAQWph.jpg",
	            "media_url_https": "https://pbs.twimg.com/media/DSd8vasVwAAQWph.jpg",
	            "url": "https://t.co/CzaZSCx2av",
	            "display_url": "pic.twitter.com/CzaZSCx2av",
	            "expanded_url": "https://twitter.com/Steve_Dangle/status/947863413744717825/photo/1",
	            "type": "photo",
	            "sizes": {
	              "thumb": {
	                "w": 150,
	                "h": 150,
	                "resize": "crop"
	              },
	              "small": {
	                "w": 680,
	                "h": 510,
	                "resize": "fit"
	              },
	              "medium": {
	                "w": 1200,
	                "h": 900,
	                "resize": "fit"
	              },
	              "large": {
	                "w": 2048,
	                "h": 1536,
	                "resize": "fit"
	              }
	            }
	          },
	          {
	            "id": 947863400633077800,
	            "id_str": "947863400633077760",
	            "indices": [
	              50,
	              73
	            ],
	            "media_url": "http://pbs.twimg.com/media/DSd8vapUEAANfrU.jpg",
	            "media_url_https": "https://pbs.twimg.com/media/DSd8vapUEAANfrU.jpg",
	            "url": "https://t.co/CzaZSCx2av",
	            "display_url": "pic.twitter.com/CzaZSCx2av",
	            "expanded_url": "https://twitter.com/Steve_Dangle/status/947863413744717825/photo/1",
	            "type": "photo",
	            "sizes": {
	              "thumb": {
	                "w": 150,
	                "h": 150,
	                "resize": "crop"
	              },
	              "large": {
	                "w": 1536,
	                "h": 2048,
	                "resize": "fit"
	              },
	              "small": {
	                "w": 510,
	                "h": 680,
	                "resize": "fit"
	              },
	              "medium": {
	                "w": 900,
	                "h": 1200,
	                "resize": "fit"
	              }
	            }
	          },
	          {
	            "id": 947863400637329400,
	            "id_str": "947863400637329409",
	            "indices": [
	              50,
	              73
	            ],
	            "media_url": "http://pbs.twimg.com/media/DSd8vaqU8AE82Pd.jpg",
	            "media_url_https": "https://pbs.twimg.com/media/DSd8vaqU8AE82Pd.jpg",
	            "url": "https://t.co/CzaZSCx2av",
	            "display_url": "pic.twitter.com/CzaZSCx2av",
	            "expanded_url": "https://twitter.com/Steve_Dangle/status/947863413744717825/photo/1",
	            "type": "photo",
	            "sizes": {
	              "large": {
	                "w": 1536,
	                "h": 2048,
	                "resize": "fit"
	              },
	              "thumb": {
	                "w": 150,
	                "h": 150,
	                "resize": "crop"
	              },
	              "small": {
	                "w": 510,
	                "h": 680,
	                "resize": "fit"
	              },
	              "medium": {
	                "w": 900,
	                "h": 1200,
	                "resize": "fit"
	              }
	            }
	          },
	          {
	            "id": 947863400637276200,
	            "id_str": "947863400637276160",
	            "indices": [
	              50,
	              73
	            ],
	            "media_url": "http://pbs.twimg.com/media/DSd8vaqUIAAaVm-.jpg",
	            "media_url_https": "https://pbs.twimg.com/media/DSd8vaqUIAAaVm-.jpg",
	            "url": "https://t.co/CzaZSCx2av",
	            "display_url": "pic.twitter.com/CzaZSCx2av",
	            "expanded_url": "https://twitter.com/Steve_Dangle/status/947863413744717825/photo/1",
	            "type": "photo",
	            "sizes": {
	              "small": {
	                "w": 680,
	                "h": 510,
	                "resize": "fit"
	              },
	              "thumb": {
	                "w": 150,
	                "h": 150,
	                "resize": "crop"
	              },
	              "medium": {
	                "w": 1200,
	                "h": 900,
	                "resize": "fit"
	              },
	              "large": {
	                "w": 2048,
	                "h": 1536,
	                "resize": "fit"
	              }
	            }
	          }
	        ]
	      },
	      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	      "in_reply_to_status_id": null,
	      "in_reply_to_status_id_str": null,
	      "in_reply_to_user_id": null,
	      "in_reply_to_user_id_str": null,
	      "in_reply_to_screen_name": null,
	      "user": {
	        "id": 24623145,
	        "id_str": "24623145",
	        "name": "Steve Dangle Glynn",
	        "screen_name": "Steve_Dangle",
	        "location": "Toronto",
	        "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	        "url": "https://t.co/INunLgk3Dn",
	        "entities": {
	          "url": {
	            "urls": [
	              {
	                "url": "https://t.co/INunLgk3Dn",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                "indices": [
	                  0,
	                  23
	                ]
	              }
	            ]
	          },
	          "description": {
	            "urls": [
	              {
	                "url": "https://t.co/qJeHmofJLB",
	                "expanded_url": "http://theleafsnation.com",
	                "display_url": "theleafsnation.com",
	                "indices": [
	                  82,
	                  105
	                ]
	              }
	            ]
	          }
	        },
	        "protected": false,
	        "followers_count": 102987,
	        "friends_count": 2680,
	        "listed_count": 1166,
	        "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	        "favourites_count": 76053,
	        "utc_offset": -18000,
	        "time_zone": "Quito",
	        "geo_enabled": false,
	        "verified": true,
	        "statuses_count": 115689,
	        "lang": "en",
	        "contributors_enabled": false,
	        "is_translator": false,
	        "is_translation_enabled": false,
	        "profile_background_color": "1A1B1F",
	        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_tile": true,
	        "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	        "profile_link_color": "053EFA",
	        "profile_sidebar_border_color": "181A1E",
	        "profile_sidebar_fill_color": "252429",
	        "profile_text_color": "666666",
	        "profile_use_background_image": true,
	        "has_extended_profile": false,
	        "default_profile": false,
	        "default_profile_image": false,
	        "following": true,
	        "follow_request_sent": false,
	        "notifications": false,
	        "translator_type": "none"
	      },
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "is_quote_status": false,
	      "retweet_count": 10,
	      "favorite_count": 368,
	      "favorited": false,
	      "retweeted": false,
	      "possibly_sensitive": false,
	      "lang": "en",
	      "selected": ""
	    },
	    {
	      "created_at": "Mon Jan 01 15:54:03 +0000 2018",
	      "id": 947858466781134800,
	      "id_str": "947858466781134848",
	      "full_text": "@BenWilsonVT Sorry what’s OG6?",
	      "truncated": false,
	      "display_text_range": [
	        13,
	        30
	      ],
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [
	          {
	            "screen_name": "BenWilsonVT",
	            "name": "Ben Wilson",
	            "id": 203557931,
	            "id_str": "203557931",
	            "indices": [
	              0,
	              12
	            ]
	          }
	        ],
	        "urls": []
	      },
	      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	      "in_reply_to_status_id": 947838325246906400,
	      "in_reply_to_status_id_str": "947838325246906370",
	      "in_reply_to_user_id": 203557931,
	      "in_reply_to_user_id_str": "203557931",
	      "in_reply_to_screen_name": "BenWilsonVT",
	      "user": {
	        "id": 24623145,
	        "id_str": "24623145",
	        "name": "Steve Dangle Glynn",
	        "screen_name": "Steve_Dangle",
	        "location": "Toronto",
	        "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	        "url": "https://t.co/INunLgk3Dn",
	        "entities": {
	          "url": {
	            "urls": [
	              {
	                "url": "https://t.co/INunLgk3Dn",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                "indices": [
	                  0,
	                  23
	                ]
	              }
	            ]
	          },
	          "description": {
	            "urls": [
	              {
	                "url": "https://t.co/qJeHmofJLB",
	                "expanded_url": "http://theleafsnation.com",
	                "display_url": "theleafsnation.com",
	                "indices": [
	                  82,
	                  105
	                ]
	              }
	            ]
	          }
	        },
	        "protected": false,
	        "followers_count": 102987,
	        "friends_count": 2680,
	        "listed_count": 1166,
	        "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	        "favourites_count": 76053,
	        "utc_offset": -18000,
	        "time_zone": "Quito",
	        "geo_enabled": false,
	        "verified": true,
	        "statuses_count": 115689,
	        "lang": "en",
	        "contributors_enabled": false,
	        "is_translator": false,
	        "is_translation_enabled": false,
	        "profile_background_color": "1A1B1F",
	        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_tile": true,
	        "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	        "profile_link_color": "053EFA",
	        "profile_sidebar_border_color": "181A1E",
	        "profile_sidebar_fill_color": "252429",
	        "profile_text_color": "666666",
	        "profile_use_background_image": true,
	        "has_extended_profile": false,
	        "default_profile": false,
	        "default_profile_image": false,
	        "following": true,
	        "follow_request_sent": false,
	        "notifications": false,
	        "translator_type": "none"
	      },
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "is_quote_status": false,
	      "retweet_count": 0,
	      "favorite_count": 0,
	      "favorited": false,
	      "retweeted": false,
	      "lang": "en",
	      "selected": ""
	    },
	    {
	      "created_at": "Mon Jan 01 15:37:51 +0000 2018",
	      "id": 947854389783474200,
	      "id_str": "947854389783474181",
	      "full_text": "RT @Steve_Dangle: The new LFR video is up! For the Leafs, it was a bad game but a great year. https://t.co/hCqIMP9sho",
	      "truncated": false,
	      "display_text_range": [
	        0,
	        117
	      ],
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [
	          {
	            "screen_name": "Steve_Dangle",
	            "name": "Steve Dangle Glynn",
	            "id": 24623145,
	            "id_str": "24623145",
	            "indices": [
	              3,
	              16
	            ]
	          }
	        ],
	        "urls": [
	          {
	            "url": "https://t.co/hCqIMP9sho",
	            "expanded_url": "http://www.sportsnet.ca/hockey/nhl/lfr11-game-40-craps/",
	            "display_url": "sportsnet.ca/hockey/nhl/lfr…",
	            "indices": [
	              94,
	              117
	            ]
	          }
	        ]
	      },
	      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	      "in_reply_to_status_id": null,
	      "in_reply_to_status_id_str": null,
	      "in_reply_to_user_id": null,
	      "in_reply_to_user_id_str": null,
	      "in_reply_to_screen_name": null,
	      "user": {
	        "id": 24623145,
	        "id_str": "24623145",
	        "name": "Steve Dangle Glynn",
	        "screen_name": "Steve_Dangle",
	        "location": "Toronto",
	        "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	        "url": "https://t.co/INunLgk3Dn",
	        "entities": {
	          "url": {
	            "urls": [
	              {
	                "url": "https://t.co/INunLgk3Dn",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                "indices": [
	                  0,
	                  23
	                ]
	              }
	            ]
	          },
	          "description": {
	            "urls": [
	              {
	                "url": "https://t.co/qJeHmofJLB",
	                "expanded_url": "http://theleafsnation.com",
	                "display_url": "theleafsnation.com",
	                "indices": [
	                  82,
	                  105
	                ]
	              }
	            ]
	          }
	        },
	        "protected": false,
	        "followers_count": 102987,
	        "friends_count": 2680,
	        "listed_count": 1166,
	        "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	        "favourites_count": 76053,
	        "utc_offset": -18000,
	        "time_zone": "Quito",
	        "geo_enabled": false,
	        "verified": true,
	        "statuses_count": 115689,
	        "lang": "en",
	        "contributors_enabled": false,
	        "is_translator": false,
	        "is_translation_enabled": false,
	        "profile_background_color": "1A1B1F",
	        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_tile": true,
	        "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	        "profile_link_color": "053EFA",
	        "profile_sidebar_border_color": "181A1E",
	        "profile_sidebar_fill_color": "252429",
	        "profile_text_color": "666666",
	        "profile_use_background_image": true,
	        "has_extended_profile": false,
	        "default_profile": false,
	        "default_profile_image": false,
	        "following": true,
	        "follow_request_sent": false,
	        "notifications": false,
	        "translator_type": "none"
	      },
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "retweeted_status": {
	        "created_at": "Mon Jan 01 03:44:56 +0000 2018",
	        "id": 947674979239313400,
	        "id_str": "947674979239313409",
	        "full_text": "The new LFR video is up! For the Leafs, it was a bad game but a great year. https://t.co/hCqIMP9sho",
	        "truncated": false,
	        "display_text_range": [
	          0,
	          99
	        ],
	        "entities": {
	          "hashtags": [],
	          "symbols": [],
	          "user_mentions": [],
	          "urls": [
	            {
	              "url": "https://t.co/hCqIMP9sho",
	              "expanded_url": "http://www.sportsnet.ca/hockey/nhl/lfr11-game-40-craps/",
	              "display_url": "sportsnet.ca/hockey/nhl/lfr…",
	              "indices": [
	                76,
	                99
	              ]
	            }
	          ]
	        },
	        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	        "in_reply_to_status_id": null,
	        "in_reply_to_status_id_str": null,
	        "in_reply_to_user_id": null,
	        "in_reply_to_user_id_str": null,
	        "in_reply_to_screen_name": null,
	        "user": {
	          "id": 24623145,
	          "id_str": "24623145",
	          "name": "Steve Dangle Glynn",
	          "screen_name": "Steve_Dangle",
	          "location": "Toronto",
	          "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	          "url": "https://t.co/INunLgk3Dn",
	          "entities": {
	            "url": {
	              "urls": [
	                {
	                  "url": "https://t.co/INunLgk3Dn",
	                  "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                  "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                  "indices": [
	                    0,
	                    23
	                  ]
	                }
	              ]
	            },
	            "description": {
	              "urls": [
	                {
	                  "url": "https://t.co/qJeHmofJLB",
	                  "expanded_url": "http://theleafsnation.com",
	                  "display_url": "theleafsnation.com",
	                  "indices": [
	                    82,
	                    105
	                  ]
	                }
	              ]
	            }
	          },
	          "protected": false,
	          "followers_count": 102987,
	          "friends_count": 2680,
	          "listed_count": 1166,
	          "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	          "favourites_count": 76053,
	          "utc_offset": -18000,
	          "time_zone": "Quito",
	          "geo_enabled": false,
	          "verified": true,
	          "statuses_count": 115689,
	          "lang": "en",
	          "contributors_enabled": false,
	          "is_translator": false,
	          "is_translation_enabled": false,
	          "profile_background_color": "1A1B1F",
	          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	          "profile_background_tile": true,
	          "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	          "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	          "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	          "profile_link_color": "053EFA",
	          "profile_sidebar_border_color": "181A1E",
	          "profile_sidebar_fill_color": "252429",
	          "profile_text_color": "666666",
	          "profile_use_background_image": true,
	          "has_extended_profile": false,
	          "default_profile": false,
	          "default_profile_image": false,
	          "following": true,
	          "follow_request_sent": false,
	          "notifications": false,
	          "translator_type": "none"
	        },
	        "geo": null,
	        "coordinates": null,
	        "place": null,
	        "contributors": null,
	        "is_quote_status": false,
	        "retweet_count": 21,
	        "favorite_count": 149,
	        "favorited": false,
	        "retweeted": false,
	        "possibly_sensitive": false,
	        "lang": "en",
	        "retweeteduser": {
	          "id": 24623145,
	          "id_str": "24623145",
	          "name": "Steve Dangle Glynn",
	          "screen_name": "Steve_Dangle",
	          "location": "Toronto",
	          "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	          "url": "https://t.co/INunLgk3Dn",
	          "entities": {
	            "url": {
	              "urls": [
	                {
	                  "url": "https://t.co/INunLgk3Dn",
	                  "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                  "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                  "indices": [
	                    0,
	                    23
	                  ]
	                }
	              ]
	            },
	            "description": {
	              "urls": [
	                {
	                  "url": "https://t.co/qJeHmofJLB",
	                  "expanded_url": "http://theleafsnation.com",
	                  "display_url": "theleafsnation.com",
	                  "indices": [
	                    82,
	                    105
	                  ]
	                }
	              ]
	            }
	          },
	          "protected": false,
	          "followers_count": 102987,
	          "friends_count": 2680,
	          "listed_count": 1166,
	          "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	          "favourites_count": 76053,
	          "utc_offset": -18000,
	          "time_zone": "Quito",
	          "geo_enabled": false,
	          "verified": true,
	          "statuses_count": 115689,
	          "lang": "en",
	          "contributors_enabled": false,
	          "is_translator": false,
	          "is_translation_enabled": false,
	          "profile_background_color": "1A1B1F",
	          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	          "profile_background_tile": true,
	          "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	          "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	          "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	          "profile_link_color": "053EFA",
	          "profile_sidebar_border_color": "181A1E",
	          "profile_sidebar_fill_color": "252429",
	          "profile_text_color": "666666",
	          "profile_use_background_image": true,
	          "has_extended_profile": false,
	          "default_profile": false,
	          "default_profile_image": false,
	          "following": true,
	          "follow_request_sent": false,
	          "notifications": false,
	          "translator_type": "none"
	        }
	      },
	      "is_quote_status": false,
	      "retweet_count": 21,
	      "favorite_count": 0,
	      "favorited": false,
	      "retweeted": false,
	      "possibly_sensitive": false,
	      "lang": "en",
	      "selected": ""
	    },
	    {
	      "created_at": "Mon Jan 01 08:01:58 +0000 2018",
	      "id": 947739663762100200,
	      "id_str": "947739663762100225",
	      "full_text": "RT @RetroNewsNow: 🗞On December 31, 1995, Bill Watterson published the final 'Calvin &amp; Hobbes' comic strip https://t.co/OWeZCOQaFu",
	      "truncated": false,
	      "display_text_range": [
	        0,
	        133
	      ],
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [
	          {
	            "screen_name": "RetroNewsNow",
	            "name": "RetroNewsNow",
	            "id": 2377703834,
	            "id_str": "2377703834",
	            "indices": [
	              3,
	              16
	            ]
	          }
	        ],
	        "urls": [],
	        "media": [
	          {
	            "id": 947514447718965200,
	            "id_str": "947514447718965248",
	            "indices": [
	              110,
	              133
	            ],
	            "media_url": "http://pbs.twimg.com/media/DSY_XrvW4AAYKNv.jpg",
	            "media_url_https": "https://pbs.twimg.com/media/DSY_XrvW4AAYKNv.jpg",
	            "url": "https://t.co/OWeZCOQaFu",
	            "display_url": "pic.twitter.com/OWeZCOQaFu",
	            "expanded_url": "https://twitter.com/RetroNewsNow/status/947514458032701440/photo/1",
	            "type": "photo",
	            "sizes": {
	              "small": {
	                "w": 680,
	                "h": 425,
	                "resize": "fit"
	              },
	              "thumb": {
	                "w": 150,
	                "h": 150,
	                "resize": "crop"
	              },
	              "large": {
	                "w": 1920,
	                "h": 1200,
	                "resize": "fit"
	              },
	              "medium": {
	                "w": 1200,
	                "h": 750,
	                "resize": "fit"
	              }
	            },
	            "source_status_id": 947514458032701400,
	            "source_status_id_str": "947514458032701440",
	            "source_user_id": 2377703834,
	            "source_user_id_str": "2377703834"
	          }
	        ]
	      },
	      "extended_entities": {
	        "media": [
	          {
	            "id": 947514447718965200,
	            "id_str": "947514447718965248",
	            "indices": [
	              110,
	              133
	            ],
	            "media_url": "http://pbs.twimg.com/media/DSY_XrvW4AAYKNv.jpg",
	            "media_url_https": "https://pbs.twimg.com/media/DSY_XrvW4AAYKNv.jpg",
	            "url": "https://t.co/OWeZCOQaFu",
	            "display_url": "pic.twitter.com/OWeZCOQaFu",
	            "expanded_url": "https://twitter.com/RetroNewsNow/status/947514458032701440/photo/1",
	            "type": "photo",
	            "sizes": {
	              "small": {
	                "w": 680,
	                "h": 425,
	                "resize": "fit"
	              },
	              "thumb": {
	                "w": 150,
	                "h": 150,
	                "resize": "crop"
	              },
	              "large": {
	                "w": 1920,
	                "h": 1200,
	                "resize": "fit"
	              },
	              "medium": {
	                "w": 1200,
	                "h": 750,
	                "resize": "fit"
	              }
	            },
	            "source_status_id": 947514458032701400,
	            "source_status_id_str": "947514458032701440",
	            "source_user_id": 2377703834,
	            "source_user_id_str": "2377703834"
	          }
	        ]
	      },
	      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	      "in_reply_to_status_id": null,
	      "in_reply_to_status_id_str": null,
	      "in_reply_to_user_id": null,
	      "in_reply_to_user_id_str": null,
	      "in_reply_to_screen_name": null,
	      "user": {
	        "id": 24623145,
	        "id_str": "24623145",
	        "name": "Steve Dangle Glynn",
	        "screen_name": "Steve_Dangle",
	        "location": "Toronto",
	        "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	        "url": "https://t.co/INunLgk3Dn",
	        "entities": {
	          "url": {
	            "urls": [
	              {
	                "url": "https://t.co/INunLgk3Dn",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                "indices": [
	                  0,
	                  23
	                ]
	              }
	            ]
	          },
	          "description": {
	            "urls": [
	              {
	                "url": "https://t.co/qJeHmofJLB",
	                "expanded_url": "http://theleafsnation.com",
	                "display_url": "theleafsnation.com",
	                "indices": [
	                  82,
	                  105
	                ]
	              }
	            ]
	          }
	        },
	        "protected": false,
	        "followers_count": 102987,
	        "friends_count": 2680,
	        "listed_count": 1166,
	        "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	        "favourites_count": 76053,
	        "utc_offset": -18000,
	        "time_zone": "Quito",
	        "geo_enabled": false,
	        "verified": true,
	        "statuses_count": 115689,
	        "lang": "en",
	        "contributors_enabled": false,
	        "is_translator": false,
	        "is_translation_enabled": false,
	        "profile_background_color": "1A1B1F",
	        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_tile": true,
	        "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	        "profile_link_color": "053EFA",
	        "profile_sidebar_border_color": "181A1E",
	        "profile_sidebar_fill_color": "252429",
	        "profile_text_color": "666666",
	        "profile_use_background_image": true,
	        "has_extended_profile": false,
	        "default_profile": false,
	        "default_profile_image": false,
	        "following": true,
	        "follow_request_sent": false,
	        "notifications": false,
	        "translator_type": "none"
	      },
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "retweeted_status": {
	        "created_at": "Sun Dec 31 17:07:05 +0000 2017",
	        "id": 947514458032701400,
	        "id_str": "947514458032701440",
	        "full_text": "🗞On December 31, 1995, Bill Watterson published the final 'Calvin &amp; Hobbes' comic strip https://t.co/OWeZCOQaFu",
	        "truncated": false,
	        "display_text_range": [
	          0,
	          91
	        ],
	        "entities": {
	          "hashtags": [],
	          "symbols": [],
	          "user_mentions": [],
	          "urls": [],
	          "media": [
	            {
	              "id": 947514447718965200,
	              "id_str": "947514447718965248",
	              "indices": [
	                92,
	                115
	              ],
	              "media_url": "http://pbs.twimg.com/media/DSY_XrvW4AAYKNv.jpg",
	              "media_url_https": "https://pbs.twimg.com/media/DSY_XrvW4AAYKNv.jpg",
	              "url": "https://t.co/OWeZCOQaFu",
	              "display_url": "pic.twitter.com/OWeZCOQaFu",
	              "expanded_url": "https://twitter.com/RetroNewsNow/status/947514458032701440/photo/1",
	              "type": "photo",
	              "sizes": {
	                "small": {
	                  "w": 680,
	                  "h": 425,
	                  "resize": "fit"
	                },
	                "thumb": {
	                  "w": 150,
	                  "h": 150,
	                  "resize": "crop"
	                },
	                "large": {
	                  "w": 1920,
	                  "h": 1200,
	                  "resize": "fit"
	                },
	                "medium": {
	                  "w": 1200,
	                  "h": 750,
	                  "resize": "fit"
	                }
	              }
	            }
	          ]
	        },
	        "extended_entities": {
	          "media": [
	            {
	              "id": 947514447718965200,
	              "id_str": "947514447718965248",
	              "indices": [
	                92,
	                115
	              ],
	              "media_url": "http://pbs.twimg.com/media/DSY_XrvW4AAYKNv.jpg",
	              "media_url_https": "https://pbs.twimg.com/media/DSY_XrvW4AAYKNv.jpg",
	              "url": "https://t.co/OWeZCOQaFu",
	              "display_url": "pic.twitter.com/OWeZCOQaFu",
	              "expanded_url": "https://twitter.com/RetroNewsNow/status/947514458032701440/photo/1",
	              "type": "photo",
	              "sizes": {
	                "small": {
	                  "w": 680,
	                  "h": 425,
	                  "resize": "fit"
	                },
	                "thumb": {
	                  "w": 150,
	                  "h": 150,
	                  "resize": "crop"
	                },
	                "large": {
	                  "w": 1920,
	                  "h": 1200,
	                  "resize": "fit"
	                },
	                "medium": {
	                  "w": 1200,
	                  "h": 750,
	                  "resize": "fit"
	                }
	              }
	            }
	          ]
	        },
	        "source": "<a href=\"http://twitter.com/#!/download/ipad\" rel=\"nofollow\">Twitter for iPad</a>",
	        "in_reply_to_status_id": null,
	        "in_reply_to_status_id_str": null,
	        "in_reply_to_user_id": null,
	        "in_reply_to_user_id_str": null,
	        "in_reply_to_screen_name": null,
	        "user": {
	          "id": 2377703834,
	          "id_str": "2377703834",
	          "name": "RetroNewsNow",
	          "screen_name": "RetroNewsNow",
	          "location": "USA",
	          "description": "Mostly retro...sometimes not",
	          "url": null,
	          "entities": {
	            "description": {
	              "urls": []
	            }
	          },
	          "protected": false,
	          "followers_count": 35105,
	          "friends_count": 855,
	          "listed_count": 423,
	          "created_at": "Fri Mar 07 21:59:24 +0000 2014",
	          "favourites_count": 1861,
	          "utc_offset": -28800,
	          "time_zone": "Pacific Time (US & Canada)",
	          "geo_enabled": false,
	          "verified": false,
	          "statuses_count": 22589,
	          "lang": "en",
	          "contributors_enabled": false,
	          "is_translator": false,
	          "is_translation_enabled": false,
	          "profile_background_color": "C0DEED",
	          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
	          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
	          "profile_background_tile": false,
	          "profile_image_url": "http://pbs.twimg.com/profile_images/944287436074561537/a3Fr58qu_normal.jpg",
	          "profile_image_url_https": "https://pbs.twimg.com/profile_images/944287436074561537/a3Fr58qu_normal.jpg",
	          "profile_banner_url": "https://pbs.twimg.com/profile_banners/2377703834/1492672203",
	          "profile_link_color": "1DA1F2",
	          "profile_sidebar_border_color": "C0DEED",
	          "profile_sidebar_fill_color": "DDEEF6",
	          "profile_text_color": "333333",
	          "profile_use_background_image": true,
	          "has_extended_profile": false,
	          "default_profile": true,
	          "default_profile_image": false,
	          "following": false,
	          "follow_request_sent": false,
	          "notifications": false,
	          "translator_type": "none"
	        },
	        "geo": null,
	        "coordinates": null,
	        "place": null,
	        "contributors": null,
	        "is_quote_status": false,
	        "retweet_count": 2988,
	        "favorite_count": 5283,
	        "favorited": false,
	        "retweeted": false,
	        "possibly_sensitive": false,
	        "lang": "en",
	        "retweeteduser": {
	          "id": 24623145,
	          "id_str": "24623145",
	          "name": "Steve Dangle Glynn",
	          "screen_name": "Steve_Dangle",
	          "location": "Toronto",
	          "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	          "url": "https://t.co/INunLgk3Dn",
	          "entities": {
	            "url": {
	              "urls": [
	                {
	                  "url": "https://t.co/INunLgk3Dn",
	                  "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                  "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                  "indices": [
	                    0,
	                    23
	                  ]
	                }
	              ]
	            },
	            "description": {
	              "urls": [
	                {
	                  "url": "https://t.co/qJeHmofJLB",
	                  "expanded_url": "http://theleafsnation.com",
	                  "display_url": "theleafsnation.com",
	                  "indices": [
	                    82,
	                    105
	                  ]
	                }
	              ]
	            }
	          },
	          "protected": false,
	          "followers_count": 102987,
	          "friends_count": 2680,
	          "listed_count": 1166,
	          "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	          "favourites_count": 76053,
	          "utc_offset": -18000,
	          "time_zone": "Quito",
	          "geo_enabled": false,
	          "verified": true,
	          "statuses_count": 115689,
	          "lang": "en",
	          "contributors_enabled": false,
	          "is_translator": false,
	          "is_translation_enabled": false,
	          "profile_background_color": "1A1B1F",
	          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	          "profile_background_tile": true,
	          "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	          "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	          "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	          "profile_link_color": "053EFA",
	          "profile_sidebar_border_color": "181A1E",
	          "profile_sidebar_fill_color": "252429",
	          "profile_text_color": "666666",
	          "profile_use_background_image": true,
	          "has_extended_profile": false,
	          "default_profile": false,
	          "default_profile_image": false,
	          "following": true,
	          "follow_request_sent": false,
	          "notifications": false,
	          "translator_type": "none"
	        }
	      },
	      "is_quote_status": false,
	      "retweet_count": 2988,
	      "favorite_count": 0,
	      "favorited": false,
	      "retweeted": false,
	      "possibly_sensitive": false,
	      "lang": "en",
	      "selected": ""
	    },
	    {
	      "created_at": "Mon Jan 01 05:55:53 +0000 2018",
	      "id": 947707933168508900,
	      "id_str": "947707933168508928",
	      "full_text": "RT @CutlerKlein: In the words of those guys that tried to fight @Steve_Dangle once, GET LIT UP. Happy new year from Utah! https://t.co/uCqP…",
	      "truncated": false,
	      "display_text_range": [
	        0,
	        140
	      ],
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [
	          {
	            "screen_name": "CutlerKlein",
	            "name": "Cutler Klein",
	            "id": 389762968,
	            "id_str": "389762968",
	            "indices": [
	              3,
	              15
	            ]
	          },
	          {
	            "screen_name": "Steve_Dangle",
	            "name": "Steve Dangle Glynn",
	            "id": 24623145,
	            "id_str": "24623145",
	            "indices": [
	              64,
	              77
	            ]
	          }
	        ],
	        "urls": []
	      },
	      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	      "in_reply_to_status_id": null,
	      "in_reply_to_status_id_str": null,
	      "in_reply_to_user_id": null,
	      "in_reply_to_user_id_str": null,
	      "in_reply_to_screen_name": null,
	      "user": {
	        "id": 24623145,
	        "id_str": "24623145",
	        "name": "Steve Dangle Glynn",
	        "screen_name": "Steve_Dangle",
	        "location": "Toronto",
	        "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	        "url": "https://t.co/INunLgk3Dn",
	        "entities": {
	          "url": {
	            "urls": [
	              {
	                "url": "https://t.co/INunLgk3Dn",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                "indices": [
	                  0,
	                  23
	                ]
	              }
	            ]
	          },
	          "description": {
	            "urls": [
	              {
	                "url": "https://t.co/qJeHmofJLB",
	                "expanded_url": "http://theleafsnation.com",
	                "display_url": "theleafsnation.com",
	                "indices": [
	                  82,
	                  105
	                ]
	              }
	            ]
	          }
	        },
	        "protected": false,
	        "followers_count": 102987,
	        "friends_count": 2680,
	        "listed_count": 1166,
	        "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	        "favourites_count": 76053,
	        "utc_offset": -18000,
	        "time_zone": "Quito",
	        "geo_enabled": false,
	        "verified": true,
	        "statuses_count": 115689,
	        "lang": "en",
	        "contributors_enabled": false,
	        "is_translator": false,
	        "is_translation_enabled": false,
	        "profile_background_color": "1A1B1F",
	        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_tile": true,
	        "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	        "profile_link_color": "053EFA",
	        "profile_sidebar_border_color": "181A1E",
	        "profile_sidebar_fill_color": "252429",
	        "profile_text_color": "666666",
	        "profile_use_background_image": true,
	        "has_extended_profile": false,
	        "default_profile": false,
	        "default_profile_image": false,
	        "following": true,
	        "follow_request_sent": false,
	        "notifications": false,
	        "translator_type": "none"
	      },
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "retweeted_status": {
	        "created_at": "Mon Jan 01 05:44:40 +0000 2018",
	        "id": 947705111354130400,
	        "id_str": "947705111354130432",
	        "full_text": "In the words of those guys that tried to fight @Steve_Dangle once, GET LIT UP. Happy new year from Utah! https://t.co/uCqPueXgMy",
	        "truncated": false,
	        "display_text_range": [
	          0,
	          104
	        ],
	        "entities": {
	          "hashtags": [],
	          "symbols": [],
	          "user_mentions": [
	            {
	              "screen_name": "Steve_Dangle",
	              "name": "Steve Dangle Glynn",
	              "id": 24623145,
	              "id_str": "24623145",
	              "indices": [
	                47,
	                60
	              ]
	            }
	          ],
	          "urls": [],
	          "media": [
	            {
	              "id": 947703455979774000,
	              "id_str": "947703455979773954",
	              "indices": [
	                105,
	                128
	              ],
	              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/947703455979773954/pu/img/b0YFu8bGgX1Taw1Y.jpg",
	              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/947703455979773954/pu/img/b0YFu8bGgX1Taw1Y.jpg",
	              "url": "https://t.co/uCqPueXgMy",
	              "display_url": "pic.twitter.com/uCqPueXgMy",
	              "expanded_url": "https://twitter.com/CutlerKlein/status/947705111354130432/video/1",
	              "type": "photo",
	              "sizes": {
	                "thumb": {
	                  "w": 150,
	                  "h": 150,
	                  "resize": "crop"
	                },
	                "small": {
	                  "w": 383,
	                  "h": 680,
	                  "resize": "fit"
	                },
	                "large": {
	                  "w": 720,
	                  "h": 1280,
	                  "resize": "fit"
	                },
	                "medium": {
	                  "w": 675,
	                  "h": 1200,
	                  "resize": "fit"
	                }
	              }
	            }
	          ]
	        },
	        "extended_entities": {
	          "media": [
	            {
	              "id": 947703455979774000,
	              "id_str": "947703455979773954",
	              "indices": [
	                105,
	                128
	              ],
	              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/947703455979773954/pu/img/b0YFu8bGgX1Taw1Y.jpg",
	              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/947703455979773954/pu/img/b0YFu8bGgX1Taw1Y.jpg",
	              "url": "https://t.co/uCqPueXgMy",
	              "display_url": "pic.twitter.com/uCqPueXgMy",
	              "expanded_url": "https://twitter.com/CutlerKlein/status/947705111354130432/video/1",
	              "type": "video",
	              "sizes": {
	                "thumb": {
	                  "w": 150,
	                  "h": 150,
	                  "resize": "crop"
	                },
	                "small": {
	                  "w": 383,
	                  "h": 680,
	                  "resize": "fit"
	                },
	                "large": {
	                  "w": 720,
	                  "h": 1280,
	                  "resize": "fit"
	                },
	                "medium": {
	                  "w": 675,
	                  "h": 1200,
	                  "resize": "fit"
	                }
	              },
	              "video_info": {
	                "aspect_ratio": [
	                  9,
	                  16
	                ],
	                "duration_millis": 30607,
	                "variants": [
	                  {
	                    "bitrate": 320000,
	                    "content_type": "video/mp4",
	                    "url": "https://video.twimg.com/ext_tw_video/947703455979773954/pu/vid/180x320/to2z_y-sOKyinEUv.mp4"
	                  },
	                  {
	                    "bitrate": 2176000,
	                    "content_type": "video/mp4",
	                    "url": "https://video.twimg.com/ext_tw_video/947703455979773954/pu/vid/720x1280/wKA1pkMcGshX-nQX.mp4"
	                  },
	                  {
	                    "content_type": "application/x-mpegURL",
	                    "url": "https://video.twimg.com/ext_tw_video/947703455979773954/pu/pl/SZH0TnueW95xtT0i.m3u8"
	                  },
	                  {
	                    "bitrate": 832000,
	                    "content_type": "video/mp4",
	                    "url": "https://video.twimg.com/ext_tw_video/947703455979773954/pu/vid/360x640/Q-RkdNPSJFeE9VJJ.mp4"
	                  }
	                ]
	              },
	              "additional_media_info": {
	                "monetizable": false
	              }
	            }
	          ]
	        },
	        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	        "in_reply_to_status_id": null,
	        "in_reply_to_status_id_str": null,
	        "in_reply_to_user_id": null,
	        "in_reply_to_user_id_str": null,
	        "in_reply_to_screen_name": null,
	        "user": {
	          "id": 389762968,
	          "id_str": "389762968",
	          "name": "Cutler Klein",
	          "screen_name": "CutlerKlein",
	          "location": "Nashville via New York",
	          "description": "Credentialed #Preds writer @PenaltyBoxRadio, Sports guy @VandyHustler. Past: @NHL, @GoldenKnights. Medill Cherubs'14, Vandy'19// He's a good kid -Pat LaFontaine",
	          "url": null,
	          "entities": {
	            "description": {
	              "urls": []
	            }
	          },
	          "protected": false,
	          "followers_count": 1343,
	          "friends_count": 1402,
	          "listed_count": 45,
	          "created_at": "Wed Oct 12 23:30:04 +0000 2011",
	          "favourites_count": 4163,
	          "utc_offset": -21600,
	          "time_zone": "Central Time (US & Canada)",
	          "geo_enabled": true,
	          "verified": false,
	          "statuses_count": 20175,
	          "lang": "en",
	          "contributors_enabled": false,
	          "is_translator": false,
	          "is_translation_enabled": false,
	          "profile_background_color": "C0DEED",
	          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/807313294/e1074ed429e5dc35dc40171ae7592fb5.jpeg",
	          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/807313294/e1074ed429e5dc35dc40171ae7592fb5.jpeg",
	          "profile_background_tile": false,
	          "profile_image_url": "http://pbs.twimg.com/profile_images/939173314827837440/ZRb_kLfc_normal.jpg",
	          "profile_image_url_https": "https://pbs.twimg.com/profile_images/939173314827837440/ZRb_kLfc_normal.jpg",
	          "profile_banner_url": "https://pbs.twimg.com/profile_banners/389762968/1498415690",
	          "profile_link_color": "0084B4",
	          "profile_sidebar_border_color": "FFFFFF",
	          "profile_sidebar_fill_color": "DDEEF6",
	          "profile_text_color": "333333",
	          "profile_use_background_image": true,
	          "has_extended_profile": true,
	          "default_profile": false,
	          "default_profile_image": false,
	          "following": false,
	          "follow_request_sent": false,
	          "notifications": false,
	          "translator_type": "none"
	        },
	        "geo": null,
	        "coordinates": null,
	        "place": null,
	        "contributors": null,
	        "is_quote_status": false,
	        "retweet_count": 3,
	        "favorite_count": 37,
	        "favorited": false,
	        "retweeted": false,
	        "possibly_sensitive": false,
	        "lang": "en",
	        "retweeteduser": {
	          "id": 24623145,
	          "id_str": "24623145",
	          "name": "Steve Dangle Glynn",
	          "screen_name": "Steve_Dangle",
	          "location": "Toronto",
	          "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	          "url": "https://t.co/INunLgk3Dn",
	          "entities": {
	            "url": {
	              "urls": [
	                {
	                  "url": "https://t.co/INunLgk3Dn",
	                  "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                  "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                  "indices": [
	                    0,
	                    23
	                  ]
	                }
	              ]
	            },
	            "description": {
	              "urls": [
	                {
	                  "url": "https://t.co/qJeHmofJLB",
	                  "expanded_url": "http://theleafsnation.com",
	                  "display_url": "theleafsnation.com",
	                  "indices": [
	                    82,
	                    105
	                  ]
	                }
	              ]
	            }
	          },
	          "protected": false,
	          "followers_count": 102987,
	          "friends_count": 2680,
	          "listed_count": 1166,
	          "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	          "favourites_count": 76053,
	          "utc_offset": -18000,
	          "time_zone": "Quito",
	          "geo_enabled": false,
	          "verified": true,
	          "statuses_count": 115689,
	          "lang": "en",
	          "contributors_enabled": false,
	          "is_translator": false,
	          "is_translation_enabled": false,
	          "profile_background_color": "1A1B1F",
	          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	          "profile_background_tile": true,
	          "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	          "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	          "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	          "profile_link_color": "053EFA",
	          "profile_sidebar_border_color": "181A1E",
	          "profile_sidebar_fill_color": "252429",
	          "profile_text_color": "666666",
	          "profile_use_background_image": true,
	          "has_extended_profile": false,
	          "default_profile": false,
	          "default_profile_image": false,
	          "following": true,
	          "follow_request_sent": false,
	          "notifications": false,
	          "translator_type": "none"
	        }
	      },
	      "is_quote_status": false,
	      "retweet_count": 3,
	      "favorite_count": 0,
	      "favorited": false,
	      "retweeted": false,
	      "lang": "en",
	      "selected": ""
	    },
	    {
	      "created_at": "Mon Jan 01 04:55:56 +0000 2018",
	      "id": 947692847985074200,
	      "id_str": "947692847985074182",
	      "full_text": "@fiddlestick89 Lol that was a weird request eh?",
	      "truncated": false,
	      "display_text_range": [
	        15,
	        47
	      ],
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [
	          {
	            "screen_name": "fiddlestick89",
	            "name": "fiddlestick89",
	            "id": 855269324,
	            "id_str": "855269324",
	            "indices": [
	              0,
	              14
	            ]
	          }
	        ],
	        "urls": []
	      },
	      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	      "in_reply_to_status_id": 947679076717813800,
	      "in_reply_to_status_id_str": "947679076717813760",
	      "in_reply_to_user_id": 855269324,
	      "in_reply_to_user_id_str": "855269324",
	      "in_reply_to_screen_name": "fiddlestick89",
	      "user": {
	        "id": 24623145,
	        "id_str": "24623145",
	        "name": "Steve Dangle Glynn",
	        "screen_name": "Steve_Dangle",
	        "location": "Toronto",
	        "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	        "url": "https://t.co/INunLgk3Dn",
	        "entities": {
	          "url": {
	            "urls": [
	              {
	                "url": "https://t.co/INunLgk3Dn",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                "indices": [
	                  0,
	                  23
	                ]
	              }
	            ]
	          },
	          "description": {
	            "urls": [
	              {
	                "url": "https://t.co/qJeHmofJLB",
	                "expanded_url": "http://theleafsnation.com",
	                "display_url": "theleafsnation.com",
	                "indices": [
	                  82,
	                  105
	                ]
	              }
	            ]
	          }
	        },
	        "protected": false,
	        "followers_count": 102987,
	        "friends_count": 2680,
	        "listed_count": 1166,
	        "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	        "favourites_count": 76053,
	        "utc_offset": -18000,
	        "time_zone": "Quito",
	        "geo_enabled": false,
	        "verified": true,
	        "statuses_count": 115689,
	        "lang": "en",
	        "contributors_enabled": false,
	        "is_translator": false,
	        "is_translation_enabled": false,
	        "profile_background_color": "1A1B1F",
	        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_tile": true,
	        "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	        "profile_link_color": "053EFA",
	        "profile_sidebar_border_color": "181A1E",
	        "profile_sidebar_fill_color": "252429",
	        "profile_text_color": "666666",
	        "profile_use_background_image": true,
	        "has_extended_profile": false,
	        "default_profile": false,
	        "default_profile_image": false,
	        "following": true,
	        "follow_request_sent": false,
	        "notifications": false,
	        "translator_type": "none"
	      },
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "is_quote_status": false,
	      "retweet_count": 0,
	      "favorite_count": 1,
	      "favorited": false,
	      "retweeted": false,
	      "lang": "en",
	      "selected": ""
	    },
	    {
	      "created_at": "Mon Jan 01 03:53:32 +0000 2018",
	      "id": 947677142204084200,
	      "id_str": "947677142204084224",
	      "full_text": "@bri_glynn Doubtful haha what’s the story",
	      "truncated": false,
	      "display_text_range": [
	        11,
	        41
	      ],
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [
	          {
	            "screen_name": "bri_glynn",
	            "name": "brian glynn",
	            "id": 365285533,
	            "id_str": "365285533",
	            "indices": [
	              0,
	              10
	            ]
	          }
	        ],
	        "urls": []
	      },
	      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	      "in_reply_to_status_id": 947675013716561900,
	      "in_reply_to_status_id_str": "947675013716561921",
	      "in_reply_to_user_id": 365285533,
	      "in_reply_to_user_id_str": "365285533",
	      "in_reply_to_screen_name": "bri_glynn",
	      "user": {
	        "id": 24623145,
	        "id_str": "24623145",
	        "name": "Steve Dangle Glynn",
	        "screen_name": "Steve_Dangle",
	        "location": "Toronto",
	        "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	        "url": "https://t.co/INunLgk3Dn",
	        "entities": {
	          "url": {
	            "urls": [
	              {
	                "url": "https://t.co/INunLgk3Dn",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                "indices": [
	                  0,
	                  23
	                ]
	              }
	            ]
	          },
	          "description": {
	            "urls": [
	              {
	                "url": "https://t.co/qJeHmofJLB",
	                "expanded_url": "http://theleafsnation.com",
	                "display_url": "theleafsnation.com",
	                "indices": [
	                  82,
	                  105
	                ]
	              }
	            ]
	          }
	        },
	        "protected": false,
	        "followers_count": 102987,
	        "friends_count": 2680,
	        "listed_count": 1166,
	        "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	        "favourites_count": 76053,
	        "utc_offset": -18000,
	        "time_zone": "Quito",
	        "geo_enabled": false,
	        "verified": true,
	        "statuses_count": 115689,
	        "lang": "en",
	        "contributors_enabled": false,
	        "is_translator": false,
	        "is_translation_enabled": false,
	        "profile_background_color": "1A1B1F",
	        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_tile": true,
	        "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	        "profile_link_color": "053EFA",
	        "profile_sidebar_border_color": "181A1E",
	        "profile_sidebar_fill_color": "252429",
	        "profile_text_color": "666666",
	        "profile_use_background_image": true,
	        "has_extended_profile": false,
	        "default_profile": false,
	        "default_profile_image": false,
	        "following": true,
	        "follow_request_sent": false,
	        "notifications": false,
	        "translator_type": "none"
	      },
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "is_quote_status": false,
	      "retweet_count": 0,
	      "favorite_count": 0,
	      "favorited": false,
	      "retweeted": false,
	      "lang": "en",
	      "selected": ""
	    },
	    {
	      "created_at": "Mon Jan 01 03:53:15 +0000 2018",
	      "id": 947677071035080700,
	      "id_str": "947677071035080704",
	      "full_text": "@fiddlestick89 You and I just see it different, man. Also, I nag and praise both because they’re both good and bad.",
	      "truncated": false,
	      "display_text_range": [
	        15,
	        115
	      ],
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [
	          {
	            "screen_name": "fiddlestick89",
	            "name": "fiddlestick89",
	            "id": 855269324,
	            "id_str": "855269324",
	            "indices": [
	              0,
	              14
	            ]
	          }
	        ],
	        "urls": []
	      },
	      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	      "in_reply_to_status_id": 947674735923445800,
	      "in_reply_to_status_id_str": "947674735923445762",
	      "in_reply_to_user_id": 855269324,
	      "in_reply_to_user_id_str": "855269324",
	      "in_reply_to_screen_name": "fiddlestick89",
	      "user": {
	        "id": 24623145,
	        "id_str": "24623145",
	        "name": "Steve Dangle Glynn",
	        "screen_name": "Steve_Dangle",
	        "location": "Toronto",
	        "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	        "url": "https://t.co/INunLgk3Dn",
	        "entities": {
	          "url": {
	            "urls": [
	              {
	                "url": "https://t.co/INunLgk3Dn",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                "indices": [
	                  0,
	                  23
	                ]
	              }
	            ]
	          },
	          "description": {
	            "urls": [
	              {
	                "url": "https://t.co/qJeHmofJLB",
	                "expanded_url": "http://theleafsnation.com",
	                "display_url": "theleafsnation.com",
	                "indices": [
	                  82,
	                  105
	                ]
	              }
	            ]
	          }
	        },
	        "protected": false,
	        "followers_count": 102987,
	        "friends_count": 2680,
	        "listed_count": 1166,
	        "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	        "favourites_count": 76053,
	        "utc_offset": -18000,
	        "time_zone": "Quito",
	        "geo_enabled": false,
	        "verified": true,
	        "statuses_count": 115689,
	        "lang": "en",
	        "contributors_enabled": false,
	        "is_translator": false,
	        "is_translation_enabled": false,
	        "profile_background_color": "1A1B1F",
	        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_tile": true,
	        "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	        "profile_link_color": "053EFA",
	        "profile_sidebar_border_color": "181A1E",
	        "profile_sidebar_fill_color": "252429",
	        "profile_text_color": "666666",
	        "profile_use_background_image": true,
	        "has_extended_profile": false,
	        "default_profile": false,
	        "default_profile_image": false,
	        "following": true,
	        "follow_request_sent": false,
	        "notifications": false,
	        "translator_type": "none"
	      },
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "is_quote_status": false,
	      "retweet_count": 1,
	      "favorite_count": 12,
	      "favorited": false,
	      "retweeted": false,
	      "lang": "en",
	      "selected": ""
	    },
	    {
	      "created_at": "Mon Jan 01 03:52:25 +0000 2018",
	      "id": 947676862632755200,
	      "id_str": "947676862632755200",
	      "full_text": "@lionandt1 Watch my latest video.",
	      "truncated": false,
	      "display_text_range": [
	        11,
	        33
	      ],
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [
	          {
	            "screen_name": "lionandt1",
	            "name": "Siddhartha",
	            "id": 2830810684,
	            "id_str": "2830810684",
	            "indices": [
	              0,
	              10
	            ]
	          }
	        ],
	        "urls": []
	      },
	      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	      "in_reply_to_status_id": 947674650775048200,
	      "in_reply_to_status_id_str": "947674650775048192",
	      "in_reply_to_user_id": 2830810684,
	      "in_reply_to_user_id_str": "2830810684",
	      "in_reply_to_screen_name": "lionandt1",
	      "user": {
	        "id": 24623145,
	        "id_str": "24623145",
	        "name": "Steve Dangle Glynn",
	        "screen_name": "Steve_Dangle",
	        "location": "Toronto",
	        "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	        "url": "https://t.co/INunLgk3Dn",
	        "entities": {
	          "url": {
	            "urls": [
	              {
	                "url": "https://t.co/INunLgk3Dn",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                "indices": [
	                  0,
	                  23
	                ]
	              }
	            ]
	          },
	          "description": {
	            "urls": [
	              {
	                "url": "https://t.co/qJeHmofJLB",
	                "expanded_url": "http://theleafsnation.com",
	                "display_url": "theleafsnation.com",
	                "indices": [
	                  82,
	                  105
	                ]
	              }
	            ]
	          }
	        },
	        "protected": false,
	        "followers_count": 102987,
	        "friends_count": 2680,
	        "listed_count": 1166,
	        "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	        "favourites_count": 76053,
	        "utc_offset": -18000,
	        "time_zone": "Quito",
	        "geo_enabled": false,
	        "verified": true,
	        "statuses_count": 115689,
	        "lang": "en",
	        "contributors_enabled": false,
	        "is_translator": false,
	        "is_translation_enabled": false,
	        "profile_background_color": "1A1B1F",
	        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_tile": true,
	        "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	        "profile_link_color": "053EFA",
	        "profile_sidebar_border_color": "181A1E",
	        "profile_sidebar_fill_color": "252429",
	        "profile_text_color": "666666",
	        "profile_use_background_image": true,
	        "has_extended_profile": false,
	        "default_profile": false,
	        "default_profile_image": false,
	        "following": true,
	        "follow_request_sent": false,
	        "notifications": false,
	        "translator_type": "none"
	      },
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "is_quote_status": false,
	      "retweet_count": 0,
	      "favorite_count": 1,
	      "favorited": false,
	      "retweeted": false,
	      "lang": "en",
	      "selected": ""
	    },
	    {
	      "created_at": "Mon Jan 01 03:44:56 +0000 2018",
	      "id": 947674979239313400,
	      "id_str": "947674979239313409",
	      "full_text": "The new LFR video is up! For the Leafs, it was a bad game but a great year. https://t.co/hCqIMP9sho",
	      "truncated": false,
	      "display_text_range": [
	        0,
	        99
	      ],
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [],
	        "urls": [
	          {
	            "url": "https://t.co/hCqIMP9sho",
	            "expanded_url": "http://www.sportsnet.ca/hockey/nhl/lfr11-game-40-craps/",
	            "display_url": "sportsnet.ca/hockey/nhl/lfr…",
	            "indices": [
	              76,
	              99
	            ]
	          }
	        ]
	      },
	      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	      "in_reply_to_status_id": null,
	      "in_reply_to_status_id_str": null,
	      "in_reply_to_user_id": null,
	      "in_reply_to_user_id_str": null,
	      "in_reply_to_screen_name": null,
	      "user": {
	        "id": 24623145,
	        "id_str": "24623145",
	        "name": "Steve Dangle Glynn",
	        "screen_name": "Steve_Dangle",
	        "location": "Toronto",
	        "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	        "url": "https://t.co/INunLgk3Dn",
	        "entities": {
	          "url": {
	            "urls": [
	              {
	                "url": "https://t.co/INunLgk3Dn",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                "indices": [
	                  0,
	                  23
	                ]
	              }
	            ]
	          },
	          "description": {
	            "urls": [
	              {
	                "url": "https://t.co/qJeHmofJLB",
	                "expanded_url": "http://theleafsnation.com",
	                "display_url": "theleafsnation.com",
	                "indices": [
	                  82,
	                  105
	                ]
	              }
	            ]
	          }
	        },
	        "protected": false,
	        "followers_count": 102987,
	        "friends_count": 2680,
	        "listed_count": 1166,
	        "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	        "favourites_count": 76053,
	        "utc_offset": -18000,
	        "time_zone": "Quito",
	        "geo_enabled": false,
	        "verified": true,
	        "statuses_count": 115689,
	        "lang": "en",
	        "contributors_enabled": false,
	        "is_translator": false,
	        "is_translation_enabled": false,
	        "profile_background_color": "1A1B1F",
	        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_tile": true,
	        "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	        "profile_link_color": "053EFA",
	        "profile_sidebar_border_color": "181A1E",
	        "profile_sidebar_fill_color": "252429",
	        "profile_text_color": "666666",
	        "profile_use_background_image": true,
	        "has_extended_profile": false,
	        "default_profile": false,
	        "default_profile_image": false,
	        "following": true,
	        "follow_request_sent": false,
	        "notifications": false,
	        "translator_type": "none"
	      },
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "is_quote_status": false,
	      "retweet_count": 21,
	      "favorite_count": 149,
	      "favorited": false,
	      "retweeted": false,
	      "possibly_sensitive": false,
	      "lang": "en",
	      "selected": ""
	    },
	    {
	      "created_at": "Mon Jan 01 02:40:26 +0000 2018",
	      "id": 947658746125275100,
	      "id_str": "947658746125275136",
	      "full_text": "@JesseBlake Leafs jersey?",
	      "truncated": false,
	      "display_text_range": [
	        12,
	        25
	      ],
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [
	          {
	            "screen_name": "JesseBlake",
	            "name": "Jesse Blake",
	            "id": 2355237404,
	            "id_str": "2355237404",
	            "indices": [
	              0,
	              11
	            ]
	          }
	        ],
	        "urls": []
	      },
	      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	      "in_reply_to_status_id": 947657979096064000,
	      "in_reply_to_status_id_str": "947657979096064001",
	      "in_reply_to_user_id": 2355237404,
	      "in_reply_to_user_id_str": "2355237404",
	      "in_reply_to_screen_name": "JesseBlake",
	      "user": {
	        "id": 24623145,
	        "id_str": "24623145",
	        "name": "Steve Dangle Glynn",
	        "screen_name": "Steve_Dangle",
	        "location": "Toronto",
	        "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	        "url": "https://t.co/INunLgk3Dn",
	        "entities": {
	          "url": {
	            "urls": [
	              {
	                "url": "https://t.co/INunLgk3Dn",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                "indices": [
	                  0,
	                  23
	                ]
	              }
	            ]
	          },
	          "description": {
	            "urls": [
	              {
	                "url": "https://t.co/qJeHmofJLB",
	                "expanded_url": "http://theleafsnation.com",
	                "display_url": "theleafsnation.com",
	                "indices": [
	                  82,
	                  105
	                ]
	              }
	            ]
	          }
	        },
	        "protected": false,
	        "followers_count": 102987,
	        "friends_count": 2680,
	        "listed_count": 1166,
	        "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	        "favourites_count": 76053,
	        "utc_offset": -18000,
	        "time_zone": "Quito",
	        "geo_enabled": false,
	        "verified": true,
	        "statuses_count": 115689,
	        "lang": "en",
	        "contributors_enabled": false,
	        "is_translator": false,
	        "is_translation_enabled": false,
	        "profile_background_color": "1A1B1F",
	        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_tile": true,
	        "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	        "profile_link_color": "053EFA",
	        "profile_sidebar_border_color": "181A1E",
	        "profile_sidebar_fill_color": "252429",
	        "profile_text_color": "666666",
	        "profile_use_background_image": true,
	        "has_extended_profile": false,
	        "default_profile": false,
	        "default_profile_image": false,
	        "following": true,
	        "follow_request_sent": false,
	        "notifications": false,
	        "translator_type": "none"
	      },
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "is_quote_status": false,
	      "retweet_count": 0,
	      "favorite_count": 43,
	      "favorited": false,
	      "retweeted": false,
	      "lang": "en",
	      "selected": ""
	    },
	    {
	      "created_at": "Mon Jan 01 02:39:54 +0000 2018",
	      "id": 947658610351509500,
	      "id_str": "947658610351509504",
	      "full_text": "RT @JesseBlake: Thanks Oilers . . . https://t.co/KwhO5TEsuv",
	      "truncated": false,
	      "display_text_range": [
	        0,
	        59
	      ],
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [
	          {
	            "screen_name": "JesseBlake",
	            "name": "Jesse Blake",
	            "id": 2355237404,
	            "id_str": "2355237404",
	            "indices": [
	              3,
	              14
	            ]
	          }
	        ],
	        "urls": [],
	        "media": [
	          {
	            "id": 947657970791223300,
	            "id_str": "947657970791223296",
	            "indices": [
	              36,
	              59
	            ],
	            "media_url": "http://pbs.twimg.com/media/DSbB502UEAAnoQb.jpg",
	            "media_url_https": "https://pbs.twimg.com/media/DSbB502UEAAnoQb.jpg",
	            "url": "https://t.co/KwhO5TEsuv",
	            "display_url": "pic.twitter.com/KwhO5TEsuv",
	            "expanded_url": "https://twitter.com/JesseBlake/status/947657979096064001/photo/1",
	            "type": "photo",
	            "sizes": {
	              "medium": {
	                "w": 1200,
	                "h": 900,
	                "resize": "fit"
	              },
	              "thumb": {
	                "w": 150,
	                "h": 150,
	                "resize": "crop"
	              },
	              "small": {
	                "w": 680,
	                "h": 510,
	                "resize": "fit"
	              },
	              "large": {
	                "w": 2048,
	                "h": 1536,
	                "resize": "fit"
	              }
	            },
	            "source_status_id": 947657979096064000,
	            "source_status_id_str": "947657979096064001",
	            "source_user_id": 2355237404,
	            "source_user_id_str": "2355237404"
	          }
	        ]
	      },
	      "extended_entities": {
	        "media": [
	          {
	            "id": 947657970791223300,
	            "id_str": "947657970791223296",
	            "indices": [
	              36,
	              59
	            ],
	            "media_url": "http://pbs.twimg.com/media/DSbB502UEAAnoQb.jpg",
	            "media_url_https": "https://pbs.twimg.com/media/DSbB502UEAAnoQb.jpg",
	            "url": "https://t.co/KwhO5TEsuv",
	            "display_url": "pic.twitter.com/KwhO5TEsuv",
	            "expanded_url": "https://twitter.com/JesseBlake/status/947657979096064001/photo/1",
	            "type": "photo",
	            "sizes": {
	              "medium": {
	                "w": 1200,
	                "h": 900,
	                "resize": "fit"
	              },
	              "thumb": {
	                "w": 150,
	                "h": 150,
	                "resize": "crop"
	              },
	              "small": {
	                "w": 680,
	                "h": 510,
	                "resize": "fit"
	              },
	              "large": {
	                "w": 2048,
	                "h": 1536,
	                "resize": "fit"
	              }
	            },
	            "source_status_id": 947657979096064000,
	            "source_status_id_str": "947657979096064001",
	            "source_user_id": 2355237404,
	            "source_user_id_str": "2355237404"
	          }
	        ]
	      },
	      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	      "in_reply_to_status_id": null,
	      "in_reply_to_status_id_str": null,
	      "in_reply_to_user_id": null,
	      "in_reply_to_user_id_str": null,
	      "in_reply_to_screen_name": null,
	      "user": {
	        "id": 24623145,
	        "id_str": "24623145",
	        "name": "Steve Dangle Glynn",
	        "screen_name": "Steve_Dangle",
	        "location": "Toronto",
	        "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	        "url": "https://t.co/INunLgk3Dn",
	        "entities": {
	          "url": {
	            "urls": [
	              {
	                "url": "https://t.co/INunLgk3Dn",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                "indices": [
	                  0,
	                  23
	                ]
	              }
	            ]
	          },
	          "description": {
	            "urls": [
	              {
	                "url": "https://t.co/qJeHmofJLB",
	                "expanded_url": "http://theleafsnation.com",
	                "display_url": "theleafsnation.com",
	                "indices": [
	                  82,
	                  105
	                ]
	              }
	            ]
	          }
	        },
	        "protected": false,
	        "followers_count": 102987,
	        "friends_count": 2680,
	        "listed_count": 1166,
	        "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	        "favourites_count": 76053,
	        "utc_offset": -18000,
	        "time_zone": "Quito",
	        "geo_enabled": false,
	        "verified": true,
	        "statuses_count": 115689,
	        "lang": "en",
	        "contributors_enabled": false,
	        "is_translator": false,
	        "is_translation_enabled": false,
	        "profile_background_color": "1A1B1F",
	        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_tile": true,
	        "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	        "profile_link_color": "053EFA",
	        "profile_sidebar_border_color": "181A1E",
	        "profile_sidebar_fill_color": "252429",
	        "profile_text_color": "666666",
	        "profile_use_background_image": true,
	        "has_extended_profile": false,
	        "default_profile": false,
	        "default_profile_image": false,
	        "following": true,
	        "follow_request_sent": false,
	        "notifications": false,
	        "translator_type": "none"
	      },
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "retweeted_status": {
	        "created_at": "Mon Jan 01 02:37:23 +0000 2018",
	        "id": 947657979096064000,
	        "id_str": "947657979096064001",
	        "full_text": "Thanks Oilers . . . https://t.co/KwhO5TEsuv",
	        "truncated": false,
	        "display_text_range": [
	          0,
	          19
	        ],
	        "entities": {
	          "hashtags": [],
	          "symbols": [],
	          "user_mentions": [],
	          "urls": [],
	          "media": [
	            {
	              "id": 947657970791223300,
	              "id_str": "947657970791223296",
	              "indices": [
	                20,
	                43
	              ],
	              "media_url": "http://pbs.twimg.com/media/DSbB502UEAAnoQb.jpg",
	              "media_url_https": "https://pbs.twimg.com/media/DSbB502UEAAnoQb.jpg",
	              "url": "https://t.co/KwhO5TEsuv",
	              "display_url": "pic.twitter.com/KwhO5TEsuv",
	              "expanded_url": "https://twitter.com/JesseBlake/status/947657979096064001/photo/1",
	              "type": "photo",
	              "sizes": {
	                "medium": {
	                  "w": 1200,
	                  "h": 900,
	                  "resize": "fit"
	                },
	                "thumb": {
	                  "w": 150,
	                  "h": 150,
	                  "resize": "crop"
	                },
	                "small": {
	                  "w": 680,
	                  "h": 510,
	                  "resize": "fit"
	                },
	                "large": {
	                  "w": 2048,
	                  "h": 1536,
	                  "resize": "fit"
	                }
	              }
	            }
	          ]
	        },
	        "extended_entities": {
	          "media": [
	            {
	              "id": 947657970791223300,
	              "id_str": "947657970791223296",
	              "indices": [
	                20,
	                43
	              ],
	              "media_url": "http://pbs.twimg.com/media/DSbB502UEAAnoQb.jpg",
	              "media_url_https": "https://pbs.twimg.com/media/DSbB502UEAAnoQb.jpg",
	              "url": "https://t.co/KwhO5TEsuv",
	              "display_url": "pic.twitter.com/KwhO5TEsuv",
	              "expanded_url": "https://twitter.com/JesseBlake/status/947657979096064001/photo/1",
	              "type": "photo",
	              "sizes": {
	                "medium": {
	                  "w": 1200,
	                  "h": 900,
	                  "resize": "fit"
	                },
	                "thumb": {
	                  "w": 150,
	                  "h": 150,
	                  "resize": "crop"
	                },
	                "small": {
	                  "w": 680,
	                  "h": 510,
	                  "resize": "fit"
	                },
	                "large": {
	                  "w": 2048,
	                  "h": 1536,
	                  "resize": "fit"
	                }
	              }
	            }
	          ]
	        },
	        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
	        "in_reply_to_status_id": null,
	        "in_reply_to_status_id_str": null,
	        "in_reply_to_user_id": null,
	        "in_reply_to_user_id_str": null,
	        "in_reply_to_screen_name": null,
	        "user": {
	          "id": 2355237404,
	          "id_str": "2355237404",
	          "name": "Jesse Blake",
	          "screen_name": "JesseBlake",
	          "location": "Toronto, Ontario",
	          "description": "Social media producer for @TimAndSid.  1/3 of the @Steve_Dangle Podcast.",
	          "url": "https://t.co/SYeA0g7O7J",
	          "entities": {
	            "url": {
	              "urls": [
	                {
	                  "url": "https://t.co/SYeA0g7O7J",
	                  "expanded_url": "http://Instagram.com/jesse.blake",
	                  "display_url": "Instagram.com/jesse.blake",
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
	          "followers_count": 9934,
	          "friends_count": 505,
	          "listed_count": 60,
	          "created_at": "Fri Feb 21 19:24:35 +0000 2014",
	          "favourites_count": 5596,
	          "utc_offset": -18000,
	          "time_zone": "Eastern Time (US & Canada)",
	          "geo_enabled": false,
	          "verified": false,
	          "statuses_count": 687,
	          "lang": "en",
	          "contributors_enabled": false,
	          "is_translator": false,
	          "is_translation_enabled": false,
	          "profile_background_color": "000000",
	          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
	          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
	          "profile_background_tile": false,
	          "profile_image_url": "http://pbs.twimg.com/profile_images/894274763983642629/rLWyjUmw_normal.jpg",
	          "profile_image_url_https": "https://pbs.twimg.com/profile_images/894274763983642629/rLWyjUmw_normal.jpg",
	          "profile_banner_url": "https://pbs.twimg.com/profile_banners/2355237404/1430455098",
	          "profile_link_color": "220000",
	          "profile_sidebar_border_color": "000000",
	          "profile_sidebar_fill_color": "000000",
	          "profile_text_color": "000000",
	          "profile_use_background_image": false,
	          "has_extended_profile": false,
	          "default_profile": false,
	          "default_profile_image": false,
	          "following": false,
	          "follow_request_sent": false,
	          "notifications": false,
	          "translator_type": "none"
	        },
	        "geo": null,
	        "coordinates": null,
	        "place": null,
	        "contributors": null,
	        "is_quote_status": false,
	        "retweet_count": 2,
	        "favorite_count": 123,
	        "favorited": false,
	        "retweeted": false,
	        "possibly_sensitive": false,
	        "lang": "en",
	        "retweeteduser": {
	          "id": 24623145,
	          "id_str": "24623145",
	          "name": "Steve Dangle Glynn",
	          "screen_name": "Steve_Dangle",
	          "location": "Toronto",
	          "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	          "url": "https://t.co/INunLgk3Dn",
	          "entities": {
	            "url": {
	              "urls": [
	                {
	                  "url": "https://t.co/INunLgk3Dn",
	                  "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                  "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                  "indices": [
	                    0,
	                    23
	                  ]
	                }
	              ]
	            },
	            "description": {
	              "urls": [
	                {
	                  "url": "https://t.co/qJeHmofJLB",
	                  "expanded_url": "http://theleafsnation.com",
	                  "display_url": "theleafsnation.com",
	                  "indices": [
	                    82,
	                    105
	                  ]
	                }
	              ]
	            }
	          },
	          "protected": false,
	          "followers_count": 102987,
	          "friends_count": 2680,
	          "listed_count": 1166,
	          "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	          "favourites_count": 76053,
	          "utc_offset": -18000,
	          "time_zone": "Quito",
	          "geo_enabled": false,
	          "verified": true,
	          "statuses_count": 115689,
	          "lang": "en",
	          "contributors_enabled": false,
	          "is_translator": false,
	          "is_translation_enabled": false,
	          "profile_background_color": "1A1B1F",
	          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	          "profile_background_tile": true,
	          "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	          "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	          "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	          "profile_link_color": "053EFA",
	          "profile_sidebar_border_color": "181A1E",
	          "profile_sidebar_fill_color": "252429",
	          "profile_text_color": "666666",
	          "profile_use_background_image": true,
	          "has_extended_profile": false,
	          "default_profile": false,
	          "default_profile_image": false,
	          "following": true,
	          "follow_request_sent": false,
	          "notifications": false,
	          "translator_type": "none"
	        }
	      },
	      "is_quote_status": false,
	      "retweet_count": 2,
	      "favorite_count": 0,
	      "favorited": false,
	      "retweeted": false,
	      "possibly_sensitive": false,
	      "lang": "en",
	      "selected": ""
	    },
	    {
	      "created_at": "Mon Jan 01 02:23:55 +0000 2018",
	      "id": 947654589075116000,
	      "id_str": "947654589075116032",
	      "full_text": "@StevenEllisNHL I didn't answer this directly but I sort of did with the goal thing. You'll like it, I think.",
	      "truncated": false,
	      "display_text_range": [
	        16,
	        109
	      ],
	      "entities": {
	        "hashtags": [],
	        "symbols": [],
	        "user_mentions": [
	          {
	            "screen_name": "StevenEllisNHL",
	            "name": "Steven Ellis",
	            "id": 130288714,
	            "id_str": "130288714",
	            "indices": [
	              0,
	              15
	            ]
	          }
	        ],
	        "urls": []
	      },
	      "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
	      "in_reply_to_status_id": 947609081086398500,
	      "in_reply_to_status_id_str": "947609081086398466",
	      "in_reply_to_user_id": 130288714,
	      "in_reply_to_user_id_str": "130288714",
	      "in_reply_to_screen_name": "StevenEllisNHL",
	      "user": {
	        "id": 24623145,
	        "id_str": "24623145",
	        "name": "Steve Dangle Glynn",
	        "screen_name": "Steve_Dangle",
	        "location": "Toronto",
	        "description": "Hockey YouTuber. Blogger at Sportsnet. Steve Dangle Podcast on iTunes. Find me on https://t.co/qJeHmofJLB. Weird career paths are fun. Laugh a little.",
	        "url": "https://t.co/INunLgk3Dn",
	        "entities": {
	          "url": {
	            "urls": [
	              {
	                "url": "https://t.co/INunLgk3Dn",
	                "expanded_url": "http://www.sportsnet.ca/hockey/nhl/blog/the-daily-dangle/",
	                "display_url": "sportsnet.ca/hockey/nhl/blo…",
	                "indices": [
	                  0,
	                  23
	                ]
	              }
	            ]
	          },
	          "description": {
	            "urls": [
	              {
	                "url": "https://t.co/qJeHmofJLB",
	                "expanded_url": "http://theleafsnation.com",
	                "display_url": "theleafsnation.com",
	                "indices": [
	                  82,
	                  105
	                ]
	              }
	            ]
	          }
	        },
	        "protected": false,
	        "followers_count": 102987,
	        "friends_count": 2680,
	        "listed_count": 1166,
	        "created_at": "Mon Mar 16 01:13:54 +0000 2009",
	        "favourites_count": 76053,
	        "utc_offset": -18000,
	        "time_zone": "Quito",
	        "geo_enabled": false,
	        "verified": true,
	        "statuses_count": 115689,
	        "lang": "en",
	        "contributors_enabled": false,
	        "is_translator": false,
	        "is_translation_enabled": false,
	        "profile_background_color": "1A1B1F",
	        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635813797/4lh12no40xd4vuv5equ4.png",
	        "profile_background_tile": true,
	        "profile_image_url": "http://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_image_url_https": "https://pbs.twimg.com/profile_images/859531314323746817/j_UyCCC5_normal.jpg",
	        "profile_banner_url": "https://pbs.twimg.com/profile_banners/24623145/1493763265",
	        "profile_link_color": "053EFA",
	        "profile_sidebar_border_color": "181A1E",
	        "profile_sidebar_fill_color": "252429",
	        "profile_text_color": "666666",
	        "profile_use_background_image": true,
	        "has_extended_profile": false,
	        "default_profile": false,
	        "default_profile_image": false,
	        "following": true,
	        "follow_request_sent": false,
	        "notifications": false,
	        "translator_type": "none"
	      },
	      "geo": null,
	      "coordinates": null,
	      "place": null,
	      "contributors": null,
	      "is_quote_status": false,
	      "retweet_count": 0,
	      "favorite_count": 1,
	      "favorited": false,
	      "retweeted": false,
	      "lang": "en",
	      "selected": ""
	    }
	  ]
	};
	const component = renderer.create(
	<Profile 
		selectedUser={data.screen_name}
		clearSelectedUser={()=> console.log}
		showBackButton={true}
		activeTab={data.screen_name}
		testdata={data}
	/>,
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});