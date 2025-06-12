var APP_DATA = {
  "scenes": [
    {
      "id": "0-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 0.10074271815820346,
        "pitch": 0.04877050924820381,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": 1.697617486154182,
          "pitch": 0.004368411056347554,
          "rotation": 0,
          "target": "1-bathroom"
        },
        {
          "yaw": 0.10074271815820346,
          "pitch": 0.04877050924820381,
          "rotation": 0,
          "target": "2-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -2.2809867027794244,
        "pitch": 0.03747545518495876,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -1.375537155163439,
          "pitch": -0.002124320429587101,
          "rotation": 0,
          "target": "0-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -0.49275800836647576,
          "pitch": 0.08304443026626807,
          "rotation": 0,
          "target": "3-balcony"
        },
        {
          "yaw": -2.4959664485472075,
          "pitch": -0.003526553064240545,
          "rotation": 5.497787143782138,
          "target": "0-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -0.35128559331952935,
        "pitch": -0.02577825698727665,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -3.027476521131561,
          "pitch": -0.008640163077831886,
          "rotation": 0,
          "target": "2-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
