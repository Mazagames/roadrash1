


const scriptsInEvents = {

		async Gamesheet_Event119_Act2(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			var data = gameManager.onGameInit()
			 data = JSON.parse(data)
			 
			    var obj = {
			       gameID: data.gameId,
			        roomID: data.roomId,
			        userID: data.userId,
			        type: "over"
			    }
			    try {
			        var data = JSON.stringify(obj)
			        gameManager.onTrack('gameExit', data)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Gamesheet_Event119_Act3(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			var data = gameManager.onGameInit()
			 data = JSON.parse(data)
			 
			    var obj = {
			       gameID: data.gameId,
			        roomID: data.roomId,
			        userID: data.userId,
					score: runtime.globalVars.Score,
			        highScore: runtime.globalVars.HighScore,
			        info: encryption.getInfo(runtime.globalVars.Score, 10, 1)
			    }
			    try {
			        var score = JSON.stringify(obj)
			        gameManager.onGameOver(score)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Gamesheet_Event119_Act4(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			    try {
			        var obj = {
			            score: score,
			            timestamp: timestamp,
						type: "over"
			        }
			        var data = JSON.stringify(obj)
			        gameManager.onTrack('gameExit', data)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Carselection_Event27_Act4(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			var data = gameManager.onGameInit()
			 data = JSON.parse(data)
			 
			    var obj = {
			       gameID: data.gameId,
			        roomID: data.roomId,
			        userID: data.userId,
					position : "start"
				    }
			    try {
			        var data = JSON.stringify(obj)
			        gameManager.onTrack('gameAdShown', data)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Carselection_Event27_Act5(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			var data = gameManager.onGameInit()
			 data = JSON.parse(data)
			 
			    var obj = {
			       gameID: data.gameId,
			        roomID: data.roomId,
			        userID: data.userId,
					position : "start",
					autoPlayed : 0
				    }
			    try {
			        var data = JSON.stringify(obj)
			        gameManager.onTrack('gameAdClicked', data)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Carselection_Event27_Act6(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined' && 
			typeof gameManager.onShowRewardedVideoAds === 'function'
			
			) {
			
			    try {
			       cc.game.on('onAdPlayed', function(result){
				   
				     if (result.status === 0) {
					 		
					 runtime.globalVars.adswatched += 1; 
					  runtime.globalVars.adGameStartClaimed += 1; 
			runtime.globalVars.adsound = 0; 
			
			if (typeof gameManager !== 'undefined') {
			var data = gameManager.onGameInit()
			 data = JSON.parse(data)
			 
			    var obj = {
			       gameID: data.gameId,
			        roomID: data.roomId,
			        userID: data.userId,
					position : "start",
				autoPlayed : 0
				    }
			    try {
			        var data = JSON.stringify(obj)
			        gameManager.onTrack('gameAdClaimed', data)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
			
			} else {
			        // did not watch the ad completely. no reward
				//runtime.globalVars.reward = runtime.globalVars.SCORE + 0;
					 runtime.globalVars.adswatched += 0; 
					 runtime.globalVars.adsound = 0; 
			    }
				   
				   })
			        gameManager.onShowRewardedVideoAds('onAdPlayed', null)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
			
		},

		async Splashsheet_Event1_Act3(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			    try {
			        gameManager.onGameStart()
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Splashsheet_Event1_Act4(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined') {
			var data = gameManager.onGameInit()
			 data = JSON.parse(data)
			 
			    var obj = {
			       gameID: data.gameId,
			        roomID: data.roomId,
			        userID: data.userId,
			        startType: "new"
			    }
			    try {
			        var data = JSON.stringify(obj)
			        gameManager.onTrack('gameStart', data)
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		},

		async Splashsheet_Event1_Act5(runtime, localVars)
		{
			if (typeof gameManager !== 'undefined' && 
			    typeof gameManager.onCheckRewardedVideoAds === 'function'
			) {
			    try {
			        gameManager.onCheckRewardedVideoAds('rewardAdsExist')
			    } catch (e) {
			        gameManager.onError(e.stack.toString())
			    }
			}
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

