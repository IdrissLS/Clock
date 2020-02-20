import asyncio
import time
import websockets
import pytz

tz = [i for i in pytz.all_timezones]

async def clock(websocket, path):
    try:
        while True:
            now = time.localtime()
            now = time.strftime("%H:%M:%S, GMT%z")
            await websocket.send(now)
            await asyncio.sleep(1)

    except:
        pass


if __name__ == "__main__":
    start_server = websockets.serve(clock, "localhost", 5678)

    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()
