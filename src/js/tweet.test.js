jest.mock('./api');

import React from 'react';
import Tweet from './tweet';
import renderer from 'react-test-renderer';

test('tweet render matches snapshot', () => {
	const data = {
			  "created_at": "Mon Jan 01 23:25:48 +0000 2018",
			  "id": 947972151574958100,
			  "id_str": "947972151574958081",
			  "full_text": "RT @ShedworksGreg: Spirit of the Mountain by Thomas Chamberlain https://t.co/GyqXj0uTy2",
			  "truncated": false,
			  "display_text_range": [
			    0,
			    87
			  ],
			  "entities": {
			    "hashtags": [],
			    "symbols": [],
			    "user_mentions": [
			      {
			        "screen_name": "ShedworksGreg",
			        "name": "Gregorios Kythreotis",
			        "id": 129175727,
			        "id_str": "129175727",
			        "indices": [
			          3,
			          17
			        ]
			      }
			    ],
			    "urls": [],
			    "media": [
			      {
			        "id": 947842376537649200,
			        "id_str": "947842376537649153",
			        "indices": [
			          64,
			          87
			        ],
			        "media_url": "http://pbs.twimg.com/media/DSdpnpyWsAEcCBt.jpg",
			        "media_url_https": "https://pbs.twimg.com/media/DSdpnpyWsAEcCBt.jpg",
			        "url": "https://t.co/GyqXj0uTy2",
			        "display_url": "pic.twitter.com/GyqXj0uTy2",
			        "expanded_url": "https://twitter.com/ShedworksGreg/status/947842380098662402/photo/1",
			        "type": "photo",
			        "sizes": {
			          "thumb": {
			            "w": 150,
			            "h": 150,
			            "resize": "crop"
			          },
			          "large": {
			            "w": 1353,
			            "h": 2048,
			            "resize": "fit"
			          },
			          "small": {
			            "w": 449,
			            "h": 680,
			            "resize": "fit"
			          },
			          "medium": {
			            "w": 793,
			            "h": 1200,
			            "resize": "fit"
			          }
			        },
			        "source_status_id": 947842380098662400,
			        "source_status_id_str": "947842380098662402",
			        "source_user_id": 129175727,
			        "source_user_id_str": "129175727"
			      }
			    ]
			  },
			  "extended_entities": {
			    "media": [
			      {
			        "id": 947842376537649200,
			        "id_str": "947842376537649153",
			        "indices": [
			          64,
			          87
			        ],
			        "media_url": "http://pbs.twimg.com/media/DSdpnpyWsAEcCBt.jpg",
			        "media_url_https": "https://pbs.twimg.com/media/DSdpnpyWsAEcCBt.jpg",
			        "url": "https://t.co/GyqXj0uTy2",
			        "display_url": "pic.twitter.com/GyqXj0uTy2",
			        "expanded_url": "https://twitter.com/ShedworksGreg/status/947842380098662402/photo/1",
			        "type": "photo",
			        "sizes": {
			          "thumb": {
			            "w": 150,
			            "h": 150,
			            "resize": "crop"
			          },
			          "large": {
			            "w": 1353,
			            "h": 2048,
			            "resize": "fit"
			          },
			          "small": {
			            "w": 449,
			            "h": 680,
			            "resize": "fit"
			          },
			          "medium": {
			            "w": 793,
			            "h": 1200,
			            "resize": "fit"
			          }
			        },
			        "source_status_id": 947842380098662400,
			        "source_status_id_str": "947842380098662402",
			        "source_user_id": 129175727,
			        "source_user_id_str": "129175727"
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
			    "id": 94936236,
			    "id_str": "94936236",
			    "name": "blazing yule log",
			    "screen_name": "exoditedragon",
			    "location": "",
			    "description": "Utopian state or get out. Banner & icon courtesy of Airu Kitsu.",
			    "url": null,
			    "entities": {
			      "description": {
			        "urls": []
			      }
			    },
			    "protected": false,
			    "followers_count": 530,
			    "friends_count": 427,
			    "listed_count": 5,
			    "created_at": "Sun Dec 06 04:46:06 +0000 2009",
			    "favourites_count": 80524,
			    "utc_offset": -25200,
			    "time_zone": "Mountain Time (US & Canada)",
			    "geo_enabled": false,
			    "verified": false,
			    "statuses_count": 38688,
			    "lang": "en",
			    "contributors_enabled": false,
			    "is_translator": false,
			    "is_translation_enabled": false,
			    "profile_background_color": "C0DEED",
			    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/73308143/Beyond_The_Grace_Of_God.jpg",
			    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/73308143/Beyond_The_Grace_Of_God.jpg",
			    "profile_background_tile": false,
			    "profile_image_url": "http://pbs.twimg.com/profile_images/804117069851541504/BIvGr2I0_normal.jpg",
			    "profile_image_url_https": "https://pbs.twimg.com/profile_images/804117069851541504/BIvGr2I0_normal.jpg",
			    "profile_banner_url": "https://pbs.twimg.com/profile_banners/94936236/1480550864",
			    "profile_link_color": "1B95E0",
			    "profile_sidebar_border_color": "000000",
			    "profile_sidebar_fill_color": "DDEEF6",
			    "profile_text_color": "333333",
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
			    "created_at": "Mon Jan 01 14:50:08 +0000 2018",
			    "id": 947842380098662400,
			    "id_str": "947842380098662402",
			    "full_text": "Spirit of the Mountain by Thomas Chamberlain https://t.co/GyqXj0uTy2",
			    "truncated": false,
			    "display_text_range": [
			      0,
			      44
			    ],
			    "entities": {
			      "hashtags": [],
			      "symbols": [],
			      "user_mentions": [],
			      "urls": [],
			      "media": [
			        {
			          "id": 947842376537649200,
			          "id_str": "947842376537649153",
			          "indices": [
			            45,
			            68
			          ],
			          "media_url": "http://pbs.twimg.com/media/DSdpnpyWsAEcCBt.jpg",
			          "media_url_https": "https://pbs.twimg.com/media/DSdpnpyWsAEcCBt.jpg",
			          "url": "https://t.co/GyqXj0uTy2",
			          "display_url": "pic.twitter.com/GyqXj0uTy2",
			          "expanded_url": "https://twitter.com/ShedworksGreg/status/947842380098662402/photo/1",
			          "type": "photo",
			          "sizes": {
			            "thumb": {
			              "w": 150,
			              "h": 150,
			              "resize": "crop"
			            },
			            "large": {
			              "w": 1353,
			              "h": 2048,
			              "resize": "fit"
			            },
			            "small": {
			              "w": 449,
			              "h": 680,
			              "resize": "fit"
			            },
			            "medium": {
			              "w": 793,
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
			          "id": 947842376537649200,
			          "id_str": "947842376537649153",
			          "indices": [
			            45,
			            68
			          ],
			          "media_url": "http://pbs.twimg.com/media/DSdpnpyWsAEcCBt.jpg",
			          "media_url_https": "https://pbs.twimg.com/media/DSdpnpyWsAEcCBt.jpg",
			          "url": "https://t.co/GyqXj0uTy2",
			          "display_url": "pic.twitter.com/GyqXj0uTy2",
			          "expanded_url": "https://twitter.com/ShedworksGreg/status/947842380098662402/photo/1",
			          "type": "photo",
			          "sizes": {
			            "thumb": {
			              "w": 150,
			              "h": 150,
			              "resize": "crop"
			            },
			            "large": {
			              "w": 1353,
			              "h": 2048,
			              "resize": "fit"
			            },
			            "small": {
			              "w": 449,
			              "h": 680,
			              "resize": "fit"
			            },
			            "medium": {
			              "w": 793,
			              "h": 1200,
			              "resize": "fit"
			            }
			          }
			        }
			      ]
			    },
			    "source": "<a href=\"http://www.hootsuite.com\" rel=\"nofollow\">Hootsuite</a>",
			    "in_reply_to_status_id": null,
			    "in_reply_to_status_id_str": null,
			    "in_reply_to_user_id": null,
			    "in_reply_to_user_id_str": null,
			    "in_reply_to_screen_name": null,
			    "user": {
			      "id": 129175727,
			      "id_str": "129175727",
			      "name": "Gregorios Kythreotis",
			      "screen_name": "ShedworksGreg",
			      "location": "London, England",
			      "description": "Cofounder + Design at Shedworks. Works with @ShedworksDan in a Shed. Architecture graduate.",
			      "url": "https://t.co/ay4jDTPHV2",
			      "entities": {
			        "url": {
			          "urls": [
			            {
			              "url": "https://t.co/ay4jDTPHV2",
			              "expanded_url": "http://www.shed-works.co.uk",
			              "display_url": "shed-works.co.uk",
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
			      "followers_count": 8623,
			      "friends_count": 701,
			      "listed_count": 190,
			      "created_at": "Sat Apr 03 12:20:34 +0000 2010",
			      "favourites_count": 18987,
			      "utc_offset": 0,
			      "time_zone": "London",
			      "geo_enabled": true,
			      "verified": false,
			      "statuses_count": 8525,
			      "lang": "en",
			      "contributors_enabled": false,
			      "is_translator": false,
			      "is_translation_enabled": false,
			      "profile_background_color": "C0DEED",
			      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
			      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
			      "profile_background_tile": false,
			      "profile_image_url": "http://pbs.twimg.com/profile_images/907574665543143425/8Ti_CjIB_normal.jpg",
			      "profile_image_url_https": "https://pbs.twimg.com/profile_images/907574665543143425/8Ti_CjIB_normal.jpg",
			      "profile_banner_url": "https://pbs.twimg.com/profile_banners/129175727/1505217608",
			      "profile_link_color": "ABB8C2",
			      "profile_sidebar_border_color": "C0DEED",
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
			    "retweet_count": 630,
			    "favorite_count": 1945,
			    "favorited": false,
			    "retweeted": false,
			    "possibly_sensitive": false,
			    "possibly_sensitive_appealable": false,
			    "lang": "en"
			  },
			  "is_quote_status": false,
			  "retweet_count": 630,
			  "favorite_count": 0,
			  "favorited": false,
			  "retweeted": false,
			  "possibly_sensitive": false,
			  "possibly_sensitive_appealable": false,
			  "lang": "en"
			};
	const component = renderer.create(
	<Tweet 
		key={data.id_str}
		data={data}
		onClick={()=> console.log}
		mentionHandler={()=> console.log}
		skipRelativeTime={true}
	/>,
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});