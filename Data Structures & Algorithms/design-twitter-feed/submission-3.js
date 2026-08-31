class Twitter {
    constructor() {
        this.posts = new Map()
        this.following = new Map()
        this.time = 0
    }

    postTweet(userId, tweetId) {
        if (!this.posts.has(userId)) {
            this.posts.set(userId, [])
        }

        this.posts.get(userId).push([tweetId, this.time++])

        // Only latest 10 tweets per user matter
        if (this.posts.get(userId).length > 10) {
            this.posts.get(userId).shift()
        }
    }

    getNewsFeed(userId) {
        // min heap by timestamp
        let heap = new PriorityQueue((a, b) => a[1] - b[1])

        // user + everyone they follow
        let users = new Set([userId])

        if (this.following.has(userId)) {
            for (let followee of this.following.get(userId)) {
                users.add(followee)
            }
        }

        for (let user of users) {
            if (!this.posts.has(user)) continue

            for (let post of this.posts.get(user)) {
                heap.enqueue(post)

                // Keep only the latest 10 globally
                if (heap.size() > 10) {
                    heap.dequeue()
                }
            }
        }

        let result = []

        // Comes out oldest -> newest
        while (heap.size() > 0) {
            result.push(heap.dequeue()[0])
        }

        return result.reverse()
    }

    follow(followerId, followeeId) {
        if (!this.following.has(followerId)) {
            this.following.set(followerId, new Set())
        }

        this.following.get(followerId).add(followeeId)
    }

    unfollow(followerId, followeeId) {
        if (!this.following.has(followerId)) {
            return
        }

        this.following.get(followerId).delete(followeeId)
    }
}