import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Check from "@mui/icons-material/Check";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { useDispatch, useSelector } from "react-redux";
import { fetchContentUrlRequest } from '../../../actions/Course/Material/FetchContentUrlAction';

const Video = styled.video`
  flex-shrink: 1;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const ElapsedTimeTracker = ({ elapsedSec, totalSec }) => {
  const elapsedMin = Math.floor(elapsedSec / 60);
  const elapsedSecond = Math.floor(elapsedSec % 60);

  return (
    <Flex align="center" fontWeight="600" gap="4px">
      <Text fontWeight={600} color="white">
        {elapsedMin}:
      </Text>
      <Text fontWeight={600} color="white">
        {elapsedSecond.toString().padStart(2, "0")}
      </Text>
      <Text fontWeight={600} color="white">
        / {Math.floor(totalSec / 60)}:
        {Math.floor(totalSec % 60).toString().padStart(2, "0")}
      </Text>
    </Flex>
  );
};

const PlaybackRateControlButton = React.forwardRef(
  ({ onClick, playbackRate }, ref) => (
    <div ref={ref}>
      <Flex
        alignItems="center"
        cursor="pointer"
        h="40px"
        justifyContent="center"
        rounded="12px"
        w="45px"
        _hover={{
          bg: "rgba(255, 255, 255, 0.08)",
        }}
        onClick={onClick}
        transition="500ms opacity"
      >
        <Text
          color="white"
          fontWeight={700}
          letterSpacing="0.5px"
          pos="relative"
          top="-1px"
        >
          <span style={{ fontSize: "14px" }}>{playbackRate}</span>
          <span style={{ fontSize: "11px" }}>x</span>
          <ExpandMore
            bottom="-1px"
            color="white"
            marginLeft="-1px"
            marginRight="-4px"
            opacity="0.5"
            pos="relative"
            width="12px"
            stroke="white"
          />
        </Text>
      </Flex>
    </div>
  )
);

const PlaybackRateControl = React.memo(function PlaybackRateControl({
  playbackRate,
  setPlaybackRate,
}) {
  return (
    <Menu autoSelect={false} placement="top-start">
      <MenuButton as={PlaybackRateControlButton} playbackRate={playbackRate} />
      <MenuList
        bg="#1D253F"
        border="none"
        pl="8px"
        pr="8px"
        minW="50px"
        zIndex="2"
      >
        <MenuGroup
          color="white"
          fontSize="12px"
          fontWeight="400"
          ml="12px"
          title="Playback Speed"
        >
          {[0.5,1, 1.5, 2].map((rate) => (
            <MenuItem
              height="40px"
              justifyContent="space-between"
              key={`playbackRate_${rate}`}
              onClick={() => {
                if (playbackRate === rate) return;
                setPlaybackRate(rate);
              }}
              // rounded="8px"
              _hover={{
                bg: "rgba(0, 0, 0, 0.4)",
              }}
              _focus={{
                bg: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <Text fontWeight={600} size="sm" color="white">
                {rate.toFixed(1)}x
              </Text>
              {playbackRate === rate && (
                <Check width="15px" height="11px" fill="white" />
              )}
            </MenuItem>
          ))}
        </MenuGroup>
      </MenuList>
    </Menu>
  );
});

const VideoViewer = ({ material }) => {
  const [isWaiting, setIsWaiting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [durationSec, setDurationSec] = useState(1);
  const [elapsedSec, setElapsedSec] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [src, setSrc] = useState(material);
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const bufferRef = useRef(null);
  const containerRef = useRef(null);
 useEffect(()=>{
  setSrc(material)
 },[material])
  // const dispatch = useDispatch();
  // const selectorVideoView = useSelector((state) => state.fetchContentUrl.content);
  // const storeselector = useSelector((state) => state);

  // useEffect(() => {
  //   dispatch(fetchContentUrlRequest(material));
  // }, [material, dispatch]);

  // useEffect(() => {
  //   if(selectorVideoView){
  //     setSrc(selectorVideoView.filePath);

  //   }
  //   console.log("src", src);
  //   console.log("storeselector", storeselector);
  // }, [selectorVideoView]);

  useEffect(() => {
    if (!videoRef.current) return;

    const onWaiting = () => {
      if (isPlaying) setIsPlaying(false);
      setIsWaiting(true);
    };

    const onPlay = () => {
      if (isWaiting) setIsWaiting(false);
      setIsPlaying(true);
    };

    const onPause = () => {
      setIsPlaying(false);
      setIsWaiting(false);
    };

    const onProgress = () => {
      if (!videoRef.current || !videoRef.current.buffered || !bufferRef.current) return;
      if (!videoRef.current.buffered.length) return;
      const bufferedEnd = videoRef.current.buffered.end(
        videoRef.current.buffered.length - 1
      );
      const duration = videoRef.current.duration;
      if (bufferRef && duration > 0) {
        bufferRef.current.style.width = (bufferedEnd / duration) * 100 + "%";
      }
    };

    const onTimeUpdate = () => {
      setIsWaiting(false);
      if (!videoRef.current || !videoRef.current.buffered || !progressRef.current) return;
      const duration = videoRef.current.duration;
      setDurationSec(duration);
      setElapsedSec(videoRef.current.currentTime);
      if (progressRef && duration > 0) {
        progressRef.current.style.width =
          (videoRef.current.currentTime / duration) * 100 + "%";
      }
    };

    videoRef.current.addEventListener("progress", onProgress);
    videoRef.current.addEventListener("timeupdate", onTimeUpdate);
    videoRef.current.addEventListener("waiting", onWaiting);
    videoRef.current.addEventListener("play", onPlay);
    videoRef.current.addEventListener("playing", onPlay);
    videoRef.current.addEventListener("pause", onPause);

    return () => {
      if (!videoRef.current) return;
      videoRef.current.removeEventListener("progress", onProgress);
      videoRef.current.removeEventListener("timeupdate", onTimeUpdate);
      videoRef.current.removeEventListener("waiting", onWaiting);
      videoRef.current.removeEventListener("play", onPlay);
      videoRef.current.removeEventListener("playing", onPlay);
      videoRef.current.removeEventListener("pause", onPause);
    };
  }, [isPlaying, isWaiting]);

  useEffect(() => {
    if (!videoRef.current) return;
    if (videoRef.current.playbackRate === playbackRate) return;
    videoRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  const handlePlayPauseClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const seekToPosition = (pos) => {
    if (!videoRef.current) return;
    if (pos < 0 || pos > 1) return;

    const durationMs = videoRef.current.duration * 1000 || 0;
    const newElapsedMs = durationMs * pos;
    const newTimeSec = newElapsedMs / 1000;
    videoRef.current.currentTime = newTimeSec;
  };

  const handleFullscreenClick = () => {
    if (!containerRef.current) return;

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        /* Safari */
        containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.msRequestFullscreen) {
        /* IE11 */
        containerRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <Box ref={containerRef} position="relative">
      <Video ref={videoRef} src={src} />

      <Box position="absolute" bottom="10px" left="10px" right="10px"bg="rgba(0, 0, 0, 0.5)">
        <Flex alignItems="center" justifyContent="space-between">
          <Button onClick={handlePlayPauseClick} variant="ghost" size="sm">
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </Button>

          <ElapsedTimeTracker elapsedSec={elapsedSec} totalSec={durationSec} />

          <PlaybackRateControl
            playbackRate={playbackRate}
            setPlaybackRate={setPlaybackRate}
          />

          <Button onClick={handleFullscreenClick} variant="ghost" size="sm">
            {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </Button>
        </Flex>

        <Box
          mt="10px"
          height="5px"
          bg="rgba(255, 255, 255, 0.5)"
          borderRadius="5px"
          cursor="pointer"
          position="relative"
          onClick={(e) => {
            const rect = e.target.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            seekToPosition(pos);
          }}
        >
          <Box
            ref={progressRef}
            height="5px"
            bg="red"
            cursor="pointer"
            borderRadius="5px"
            position="absolute"
            top="0"
            left="0"
            width="0%"
          />
          <Box
            ref={bufferRef}
            height="5px"
            bg="rgba(255, 255, 255, 0.3)"
            borderRadius="5px"
            position="absolute"
            top="0"
            left="0"
            width="0%"
          />
        </Box>
      </Box>

      {isWaiting && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        />
      )}
    </Box>
  );
};

export default VideoViewer;






