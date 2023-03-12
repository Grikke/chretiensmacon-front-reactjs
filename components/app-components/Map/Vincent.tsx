import React, { MouseEventHandler } from 'react'

const VincentMap = ({
  onClick
}: {onClick: MouseEventHandler<SVGElement>}) => {
  return (<g className="parish-group-svg" onClick={onClick}>
    <path id="path1743_1_" vector-effect="none" className="st4" d="M361.09,179.95l0.19,0.36l0.04,0.13l0.01,0.15l-0.1,0.05l-0.09,0.15
		l-0.22,0.5l-0.21,0.35l-0.93,1.35l-0.06,0.26l-0.35,2.4l-0.12,0.36l-0.48,1.18l-0.36,0.99l-0.23,0.52l-0.12,0.22l-0.15,0.19
		l-0.1,0.09l-0.11,0.05l-0.03,0.06l0.05,0.23l0.01,0.14l-0.09,0.93l-0.13,0.9l0.19,1.37l0.1,1.22l0.04,0.3l0.06,0.23l0.15,0.39
		l0.1,0.19l0.4,0.59l0.06,0.12l-0.03,0.09l0.07,0.31l0.02,0.45l0.06,0.26l0.15,0.51l0.02,0.27l-0.01,0.45l-0.04,0.25l0.02,0.12
		l0.3,1.12v0.15l-0.04,0.19l-0.29,0.59l-0.09,0.22l-0.04,0.05l-0.07,0.01l-0.68-0.13l-0.06,0.06l-0.26,0.83l-0.08,0.34l-0.01,0.18
		l0.15,0.67l0.06,0.03h0.12l0.34-0.14l0.06,0.01l0.04,0.04l0.02,0.07l-0.39,1.8l0.09,0.02l2.15-0.13l0,0l1.34-0.15l0.54-0.07
		l0.67-0.06l1.03-0.01l1.18-0.14l4.29-0.38l0.53-0.01l0.29,0.06l4.1,0.54l0.43,0.01l0.04-0.02l0.02-0.06l0.07-0.46v-0.43l-0.12-0.79
		l-0.04-0.73l0.04-1.59l0.14-2.66l-0.02-0.3l0.02-0.06l0.1-0.01l0.06,0.02l1.28,1.63l0.19,0.28l0.79,0.96l0.4,0.6l0.15,0.14
		l0.14,0.05l0.8,0.1l1.09,0.07l0.26,0.06l0.19,0.1l0.23,0.18l0.38,0.38l0.48,0.23l0.62,0.4l1.22,0.84l1.04,0.57l0.29,0.19l0.1,0.14
		l0.16,0.15l0.98,0.76l0.24,0.15l0.97,0.72l0.17,0.15l0.64,0.42l0.86,0.51l0.73,0.46l1.49,1.03l0.68,0.54l0.08,0.03l0.05-0.02
		l0.62-0.51l1.46-0.96l0.12-0.12l0.09-0.13l0.25-0.73l0.04-0.25l0.06-0.33v-0.1l-0.04-0.17l0.13-1.29l0.05-0.33l0.1-0.43l0.2-0.59
		l0.09-0.47l0.12-1.25l0.07-0.4l0.15-0.62l0.06-0.01l3.39,0.48l0.03-0.01l0.02-0.07l-0.04-0.52l0.02-0.05l0.04-0.02l0.36-0.02
		l0.15-0.03l2.75-0.85l0.1,0.01l0.19-0.06l0.71,0.22l0.07-0.07l0.11-0.41l0.17-0.44l-0.06-0.22l0.31-0.56l0.93-0.19l1.2-1.44
		l0.05-0.1l-0.86-1.18l0.1-0.04l0.51-0.12l1.48-0.35l0.28-0.11v-0.03l-0.52-1.04l-0.22-0.49l-0.33-0.66l0.04-0.14v-1.22l-0.04-1.34
		v-0.56l0.03-0.05l-0.09-5.97l-0.09-0.01l-0.13-5.9l0.04-0.24l-0.01-1.82l-0.1-0.57l-0.05-1.25l0.04-1.86l-0.02-1.4l0.01-0.16
		l0.13-0.04l0.52-0.31l2.51-0.9l0.09-0.16l0.5-0.68l0.05-0.02l0.07-0.12l3.79-4.03l0.46-0.61l0.02-0.05l-1.59-8.15l-1.09-6.76
		l-0.16-0.77l0.01-0.09l-0.16-0.25l-0.23-0.25l-0.18-0.14l-0.36,0.12l-0.52-0.68l-0.18-0.16l-0.6-0.61l-0.51-0.41l-0.9-0.35
		l-0.22-0.37l-0.09-0.16l-0.49-1.3l-0.41-0.63l-0.09-0.04l-0.23-0.06l-0.08-0.05l-0.12-0.12l-0.64-0.84l-0.67-0.79l-0.67-1.16
		l-0.27-0.24l-0.23-0.33l-0.52-0.83l-0.44-0.52l-0.05-0.08l-0.2-0.73l0.06-0.05l0.65-0.23l0.28-0.13l-0.07-0.12l-0.35-0.06
		l-3.01-2.79l-2.38-2.52l-0.03-0.06l1.03-0.04l0.09-0.06l0.01-0.5l-0.03-0.84l0.06-0.86l0.06-0.39l0.28-1.21l0.23-0.73l0.06-0.38
		l-0.01-0.7l0.05-0.38l0.07-0.28l0.31-0.63l0.88-0.76l3.09-3.99l0.07,0.01l0.94,0.55l0.06-0.06l0.58-0.89l0.12-0.14l0.1-0.04
		l0.13-0.11l0.36-0.57l0.18-0.14l0.12-0.06l0.13-0.04l0.72-0.06l0.21-0.04l0.2-0.07l0.26-0.18l0.15-0.2l0.41-0.78l0.17-0.41
		l0.06-0.11l0.08-0.08l0.22-0.13l0.22-0.1l0.62,0.06l-0.61-0.28l-1.49-0.84l-0.39-0.11l-1.2-0.69l-1.91-0.74l-0.64-0.27l-1.36-0.5
		l-0.8-0.34l-0.4-0.37l-1.09-0.41l-0.28-0.32l-1.51-0.57l-0.07-0.38l-0.45-0.13l-0.51-0.22l-0.6-0.02l-1.44-0.34l-0.38-0.02
		l-1.2-0.13l-2.79-0.37l-0.06-0.03l-0.01-0.04l0.23-2l0.04-0.43l-0.01-0.05l-1.93-0.34l-0.36-0.08l-3.51-0.77l-0.14-0.01l-0.16,0.17
		l-4.45,0.22l-0.05,0.04l-0.26,0.02l-0.1,0.03l0.13,0.5l-0.16,0.21l-0.28,0.13l-0.06,0l-1.12-0.46l-0.11-0.08l-0.14-0.32l-0.49-0.75
		l-0.23-0.28l-0.31-0.41l-0.36-0.3l-0.83-0.79l-0.93-0.8l-0.41-0.44l-0.2-0.25l-0.31-0.47l-0.14-0.13l-0.07-0.01l-0.43,0.02
		l-0.23-0.1l-0.06-0.01l-0.06,0.03l-0.19,0l-0.22,0.26l0.14,0.67v0.06l-0.39,0.69l-0.16,0.33l-0.48,1.12l-0.04,0.15l-0.07,0.63
		l0.03,0.13l0.23,0.45l0.05,0.21l-0.02,0.19l-0.05,0.14l-0.28,0.53l-0.12,0.31l0.01,0.32l-1.01,5.11l-0.11,0.39l-0.22,0.46
		l-0.07,0.3l-0.18,0.26l-0.07,0.15l-0.41,1.21l-0.42,1.47l-0.11,0.71l-0.03,0.08l-0.06,0.31l-0.08,0.04l-0.06,0.21l-0.01,0.17
		l0.04,0.07l0.06,0.61l0.09,0.44l0.06,0.11l0.1,0.09l0.62,0.4l0.03,0.04l0.01,0.14l-0.16,0.88l-0.04,0.39l0.02,1.03l-0.12,1.27
		l-0.05,0.18l-0.2,0.47l-0.5,0.93l-0.12,0.54l-0.07,0.22l-0.08-0.03l-0.19-0.13l-0.31-0.08l-0.09,0.04l-0.15,0.22l-0.06,0.14
		l-0.07,0.3l-0.07,0.59l-0.07,0.25l-0.24,0.55l-0.16,0.59l-0.22,0.66l-0.01,0.11l-0.06,0.1l-0.2,0.67l-3.05,9.06l-0.54,2.23
		l-0.31,1.53l-0.83,4.65l-0.03,0.29l0.29,3.49l-0.18,1.42l-0.07,0.16l-0.14,0.7l-0.02,0.68l-0.26,1.77l-0.11,0.93l-0.07,0.35
		l-0.18,0.34l-0.08,0.24l-0.25,0.98l-0.17,0.8l-0.15,0.84l-0.01,0.25l-0.02,0.1l-0.2,0.86l-0.06,0.45l-0.15,2.15l-0.02,0.67
		l0.06,0.34l-0.01,0.36l-0.04,0.68l-0.15,1.12l-0.62,8.4l-0.05,0.54l-0.01,0.11l0.02,2.14l-0.03,1.08l0.01,0.09l0.04,0.04l0.16,0.03
		l0.32-0.02l0.3-0.07l0.91-0.38l0.04,0.01l0.04,0.05l0.03,0.11l-0.12,0.33l-0.01,0.17l0.03,0.1l0.48,0.76l0.14,0.3L361.09,179.95"/>
	<path id="path1745_1_" vector-effect="none" className="st4" d="M361.01,64.65l-0.1,0.11l-0.1,0.17l-0.03,0.11l-0.04,0.01l-0.17-0.01
		l-0.09,0.02l-0.22,0.14l-0.04-0.01l-0.17,0.09l-0.39,0.14l-0.2,0.16l-0.12,0.16l-0.04,0.12L359.28,66l0.06,0.46l0.06,0.21
		l0.43,1.01l0.04,0.01l-0.01,0.05l0.06,0.05l0.44,0.69l0.21,0.54l0.27,0.56l0.54,1.31l0.05,0.48l0.48,1.24l0.09,0.03l0.11,0.17
		l0.09,0.28l0.37,0.83l0.27,0.47l0.12,0.3l0.06,0.08l0.15,0.02l0.33,0.55l0.15,0.2l1,1.04l0.12,0.17l-0.14,0.09l-0.06,0.08
		l-0.03,0.21l-0.04,0.04l-1.56,0.56l-0.63,0.21l-1.28,0.5l-0.03,0.04l0.03,1.06l-0.04,0.32l-0.22,0.99l-0.15,1.19l0.02,0.07
		l0.57,0.08l-0.04,0.18l-0.51,1.43l-0.15,0.51l-0.07,0.53l-0.07,0.31l-0.68,2.38l-0.03,0.07l-0.06,0.04l-0.39,0.12l-0.12,0.06
		l0.62,1.21l0.3,0.73l0.04,0.22l0.09,0.11l0.19,0.29l0.21,0.41l0.15,0.25l0.35,0.79l0.18,0.56l0.39,1.03l0.09,0.35l0.06,0.74
		l0.04,0.17l0.09,0.16l0.1,0.14l0.12,0.1l0.01,0.06l0.17,0.1l0.07,0.08l0.12,1.38l0.02,0.94l0.04,0.17l0.05,0.2l0.06,0.06l0.25-0.03
		l0.2-0.01l0.39-0.02l0.42,0.06l0.3,0.1l0.28,0.17l0.12,0.1l0.18,0.22l0.1,0.06l0.53,0.17l0.5,0.11l0.07,0.04l0.27,0.04l0.07-0.03
		l0.52-0.37l0.29-0.16l0.17-0.06l0.49-0.09l0.19-0.05l0.18-0.09l0.55-0.44l0.22-0.11l0.22-0.04l0.11,0.02l0.2,0.11v0.03l0.04,0.01
		l0.02,0.04l0.07,0.05l0.3,0.28l0.25,0.15l0.67,0.35l0.41,0.16l0.02,0.04l-0.02,0.09l0.01,0.04l0.17,0.11l0.82,0.41l0.31,0.12
		l0.19,0l0.06-0.03l0.06,0.01l0.23,0.1l0.43-0.02l0.07,0.01l0.14,0.13l0.31,0.47l0.2,0.25l0.41,0.44l0.93,0.8l0.83,0.79l0.36,0.3
		l0.31,0.41l0.23,0.28l0.49,0.75l0.14,0.32l0.11,0.08l1.12,0.46l0.06,0l0.28-0.13l0.16-0.21l-0.13-0.5l0.1-0.03l0.26-0.02l0.05-0.04
		l4.45-0.22l0.16-0.17l0.14,0.01l3.51,0.77l0.36,0.08l1.93,0.34l0.01,0.05l-0.04,0.43l-0.23,2l0.01,0.04l0.06,0.03l2.79,0.37
		l1.2,0.13l0.38,0.02l1.44,0.34l0.6,0.02l0.51,0.22l0.45,0.13l0.07,0.38l1.51,0.57l0.28,0.32l1.09,0.41l0.4,0.37l0.8,0.34l1.36,0.5
		l0.64,0.27l1.91,0.74l1.2,0.69l0.39,0.11l1.49,0.84l0.61,0.28l1.07-0.87l0.44-0.39l0.36-0.26l0.35,0.21l0.18-0.47l0.41-0.14
		l0.39-0.08l0.39-0.02l0.44,0.06l0.19,0l0.17-0.04l0.12-0.06l0.12-0.13l0.39,0.04l0.08-0.92l0.11-0.15l0.41-0.38l0.29,0.25
		l0.23-0.85l0.23-0.17l0.24-0.33l0.47-0.84l0.39-0.56l0.16-0.29l0.27-0.56l0.14-0.34l0.06-0.36l0.09-0.17l0.14-0.14l0.69-0.44
		l0.15-0.14l0.2-0.24l0.16-0.26l0.1-0.24l0.22-0.64l0.14-0.43l0.11-0.95l0.02-0.46l0.14-0.59l0.15-0.53l0.17-0.44l-0.01-0.69
		l-0.12-0.68l-0.01-0.49l-0.17-0.45l-0.04-0.31l0.02-0.31l0.07-0.39l0.28-1.08l0.17-0.35l0.1-0.74l0.21-0.65l0.39-1.48l0.1-0.45
		l0.03-0.27l0.15-1.17l-0.08-0.85l0.04-0.42l0.09-0.62l0.51-2.47l0.11-0.07l1.21-0.45l0.07-0.05l0.04-0.05l0.01-0.13l0.09-0.51
		l-0.12-1.83l0.02-0.43l0.07-0.66l-0.01-0.57l0.06-0.66l0.09-0.47l0.21-0.53l0.19-0.44l0.14-0.44l0.13-0.66l0.35-0.82l0.04-0.22
		l-0.01-0.09l0.02-0.52l0.01-0.18l0.13-0.72l0.05-0.3l0.2-0.86l0.3-0.66l0.08-0.28l0.03-0.51l0.04-0.23l0.36-1.61l0.29-1.05
		l0.17-0.68l-0.01-0.07l-0.04-0.04l-4.83-2.11l-0.06-0.09l-1.51-0.62l-0.11-0.03l-0.17,0.07l-0.09-0.04l-0.51-0.45l-0.14-0.15
		l0.21-0.22l0.04-0.06l0.02-0.18l-0.03-0.51l0.08-0.46l0.08-0.24l0.27-0.42l0.36-0.5l0.07-0.58l0.24-0.66l0.21-0.73l0.01-0.12
		l-0.35-0.83l-0.02-0.11l0.01-0.13l0.1-0.55l0.03-0.36l0.11-0.3l0.18-0.33l0.02-0.09l-0.08-0.19l0.01-0.05l0.12-0.17v-0.06
		l-0.06-0.38l0.05-0.24l0.01-0.87l0.04-0.46l0.98,0.14l0.07-0.01l0.01-0.04l-0.13-0.63l-0.02-0.28l0.02-0.38l-0.07-0.4v-0.51
		l0.03-0.54l0.12-0.54l-0.01-0.09l-0.02-0.02l-0.1-0.01l-0.04-0.02l-0.01-0.49l0.16-0.54l0.09-0.2l0.36-0.52l0.04-0.09l0.03-0.26
		l0.29-0.7l0.14-0.27l0.2-0.23l0.25-0.41l0.1-0.12l0.51-0.4l0.12-0.14l0.35-0.65l0.17-0.16l0.07-0.14l0.06-0.32l-0.02-0.34
		l-0.2-0.54l-0.02-0.13l0.01-0.44l-0.04-0.62l0.02-0.34l0.23-0.84l0.07-0.75l0.06-0.36l-0.09-0.05l-0.22-0.18l-0.18-0.16l0.43-1.75
		l0.05-0.15l0.13-0.17l-0.99-0.39l-0.04-0.04v-0.04l0.08-0.19l0.14-0.14l0.07-0.03l0.32-0.06l0.33-0.01l0.43,0.02l0.14-0.02
		l0.24-0.18l0.07-0.11l-0.02-0.09l-0.04-0.04l-0.52-0.18l-0.26-0.05l-0.25-0.02l-0.02-0.03l-0.07-3.66l0.01-0.13l0.12-0.25
		l-0.01-0.09l-0.14-0.06l-0.03-0.32v-1.14l0.04-0.36l0.07-0.35l0.45-3.36l-0.02-0.19l0.1-0.66l0.01-0.21l-0.05-0.35l-0.19-0.46
		l-0.54-1.6l-0.3-1l-0.01-0.14l1.09-1.87l0.14-0.34l0.1-0.43l0.13-0.39l-0.14-0.03l-0.53-0.03l-1.18,0.12l-6.81-1.03l-0.34-0.09
		l-0.05-0.09l-0.11-0.02l-1.51-0.08l-0.03-0.02l-0.02-0.04l0.05-0.8l-0.16-0.83l-0.15-1.01l-0.02-0.45l-0.02-0.15l0.02-0.46
		l0.04-0.47l-0.09-0.13l-2.12-1.33l-3.92-1.1l-0.33-0.14l-0.3-0.2l-0.28-0.25l-0.15-0.18l-0.66-0.33l-0.07,0.03l-0.78-0.37
		l-0.02-0.03l-0.36-0.15L404.61,13l-0.19-0.09l-1.01-0.34l-0.1-0.01l-0.64-0.22l-0.49-0.2l-0.05-0.08l-0.02-0.21l-1.85-0.31
		l-0.06,0.03l0.07,0.52l-0.34,0.15l-0.12,0.24l-0.28,0.47l-0.25,0.38l-0.36,0.42l-0.75-0.17l-0.54-0.04l-0.36-0.03l-0.4-0.14
		l-0.6-0.1l-0.51,0.02l-0.41-0.02l-0.41,0.05l-0.15-0.02l-0.37-0.1l-0.54-0.07l-0.42-0.08l-0.4,0.02l-0.56-0.1l-0.2,0l-0.6,0.31
		l-0.13,0.04l-0.98,0.13l-0.32,0.02l-0.5-0.25l-0.31-0.11l-0.31-0.07l-0.49-0.07l-0.26-0.07l-0.19-0.15l-0.11-0.01l-0.52,0.04
		l-0.39,0.11l-0.17,0.03l-0.33-0.01l-0.78-0.13l-0.28,0l-0.79-0.03l-0.1,0.12l-0.04,0.04l-0.01,0.06l0.18,0.45l0.69,2.57l0.27,0.89
		l0.04,0.15l0.01,0.08l-0.35,0.54l-0.07,0.05l-0.59,0.24l-0.15,0.04h-0.14l-0.44-0.19l-0.22,0.01l-0.06-0.02l-0.1-0.07l-0.24-0.23
		l-0.12-0.07l-0.16-0.05l-0.37-0.03l-0.16-0.03l-0.43-0.15l-0.1-0.07l-0.09-0.13V16.8l-0.03-0.09l-0.14-0.22l-0.09-0.09l-0.08-0.04
		l-0.38-0.07l-0.1-0.06l-0.13-0.14l-0.07-0.1l-0.06-0.16l0.01-0.08l0.06-0.06l0.27-0.13l0.04-0.04v-0.16l-0.06-0.11l-0.09-0.08
		l-0.44-0.29l-0.06-0.02l-0.12,0.03l-0.21,0.15l-0.11,0.03l-0.25-0.1l-0.17-0.13l-0.07-0.08l-0.15-0.3l-0.06-0.05l-0.06,0
		l-0.42,0.12l-0.09,0l-0.08-0.04l-0.13-0.18l-0.1-0.06l-0.15-0.02l-0.25,0.18l-0.05,0.07l0.02,0.32l-0.02,0.06l-0.2,0.1H378
		l-0.1-0.07l-0.18,0.28l-0.1,0.1l-0.22,0.04l-0.02,0.03l-0.04,0.14l-0.1,0.15l0.04,0.13l-0.01,0.06l-0.23,0.13l-0.3,0.07l-1.22,0.5
		l-0.86,0.44l-0.02,0.05l0.01,0.04l0.21,0.3l0.23,0.23l0.2,0.16l-0.14,0.14l-0.75,0.51l-0.29,0.25l-0.89,0.66l-0.5,0.45l-2.32,1.8
		l0.44,0.45l0.09,0.14l0.93,0.82l0.17,0.24l0.7,1.13l0.06,0.03l1.83,0.33l-0.03,0.27l-0.28,1.56l0.01,0.04l3.39,1.22l0.04-0.17
		l0.12-1.37l0.89,0.15l0.02,0.03l-0.1,0.93l-0.17,2.61l-0.02,0.05l-0.06,0.03l-0.39,0.04l-0.18,0.04l0.04,0.21l1.01,2.55l0.03,0.13
		L378.94,33l-0.49,0.4l-0.22,0.23l-0.26,0.4l-0.02,0.06l0.04,0.09l0.89,0.99l0.09,0l0.7-0.41l0.05,0.01l1.59,0.73l0.07,0.08
		l-0.27,0.18l-0.24,0.23l-0.09,0.14l-0.09,0.37l-0.04,0.07l-0.07,0.06l-0.38,0.21l-0.06,0.07l-0.24,0.44v0.44l-0.12,0.25l0.09,0.66
		l-0.01,0.14l-0.12,0.22l-0.13,0.31l-0.06,0.05l-0.26,0.05l-0.12,0.05l-0.12,0.08L379,39.69v0.04l0.07,0.22l-0.04,0.08l-0.09,0.05
		l-0.48,0.02l-0.05,0.07l0.01,0.08l0.17,0.25l0.11,0.29l0.03,0.18l0.01,0.28l0.07,0.34l-0.25,0.34l-0.06,0.24l-0.05,0.4l-0.04,0.2
		l-0.08,0.19l-0.17,0.25l-0.48,0.6l-0.17,0.26l-0.09,0.2l-0.07,0.5l-0.07,0.15l-0.04,0.05l-0.26,0.07l-0.1,0.08l-0.02,0.1l0.01,0.12
		l0.12,0.46l0.02,0.66l-0.02,0.13l-0.36,0.82v0.15l0.04,0.24l0.06,0.1l0.2,0.24l0.05,0.12l-0.13,0.51l0.01,0.12l0.07,0.34
		l-0.04,0.16l-0.08,0.06l-0.24,0.11l-0.07,0.06l-0.06,0.1l-0.47,1.12l-0.04,0.39l-0.12,0.28l-0.09,0.3l-0.1,0.22l-0.05,0.44
		l-0.07,0.2l-0.05,0.04l-0.33,0.06l-0.15,0l-0.18-0.05l-0.06,0.01l-0.02,0.03l-0.02,0.21l-0.06,0.15l-0.02,0.23l-0.07,0.06
		l-0.09-0.01l-0.22-0.14h-0.1l-0.06,0.05l-0.11,0.18l-0.06,0.04l-0.1-0.02l-0.33-0.2l-0.14-0.03l-0.07,0.02l-0.09,0.09l-0.03,0.09
		l-0.01,0.1l0.05,0.39l-0.02,0.08l-0.43,0.44l-0.1,0.08l-0.29,0.15l-0.03,0.03l-0.01,0.08l0.06,0.56l-0.02,0.15l-0.06,0.14
		l-0.1,0.14l-0.78,0.68l-0.31,0.11l-0.66,0.16l-0.24,0.1L369.94,57l-0.01,0.05l0.24,0.4l0.02,0.13l-0.13,0.31l-0.09,0.1l-0.09-0.01
		l-0.09-0.08l-0.04-0.12l-0.04-0.03l-0.11-0.05l-0.1,0.01l-0.07,0.11l-0.07,0.49l-0.2,0.38l-0.07,0.08l-0.06,0.01l-0.43-0.13
		l-0.22-0.16l-0.06-0.02l-0.06,0.01l-0.06,0.07l-0.25,0.5l-0.12,0.2l-0.02,0.09l0.09,0.12l0.01,0.04l-0.05,0.1l-0.23,0.22
		l-0.04,0.01l-0.12-0.08l-0.07-0.02l-0.05,0.03l-0.03,0.06v0.22l-0.02,0.1l-0.18,0.24l-0.07,0.05l-0.1,0.03l-0.21,0.02l-0.1,0.03
		l-0.28,0.25l-0.08,0.1l-0.02,0.18l-0.04,0.07l-0.06,0.02l-0.17-0.09l-0.22,0.07l-0.12,0.1l-0.09,0.02l-0.25,0l-0.13,0.05
		l-0.16,0.11l-0.12,0.17l-0.19,0.4l-0.12,0.17l-0.12,0.08l-0.07,0l-0.17-0.09l-0.07-0.01l-0.25,0.11l-0.06-0.01l-0.25-0.2
		l-0.12-0.03l-0.22,0.03l-0.09-0.01l-0.23,0.04l-0.35,0.13l-0.05,0.06l-0.04,0.15l-0.01,0.15l0.04,0.2l0.09,0.27l-0.01,0.05
		l-0.07,0.05l-0.35-0.03l-0.36,0.03l-0.09,0.04l-0.02,0.07l0.02,0.05l0.1,0.11l0.01,0.05l-0.1,0.13l-0.23,0.17l-0.17,0.31
		l-0.07,0.21l0.02,0.33l-0.04,0.05l-0.09,0.01L361.01,64.65"/>
	<path id="path1753_1_" vector-effect="none" className="st4" d="M474.46,133.69l-0.07,0l-1.59,0.06l-0.26-0.02l-0.23-0.06l-0.23-0.09
		l-0.55-0.27l-0.85-0.37l-0.35-0.18l-0.21,0.01l-0.42,0.01l-0.04-0.1l-0.97-0.65l-0.11-0.05l-0.09-0.01l-0.88-0.05l-0.72-0.09
		l-0.29-0.01l-0.29,0.02l-0.2,0.04l-0.38,0.13l-0.32,0.15l-0.67,0.32l-0.51,0.19l-0.25,0.09l-0.22,0.05l-0.86-0.26l-0.11-0.01
		l-0.1,0.06l-0.17,0.3l-0.19,0.06l-0.15-0.09l-0.36-0.14l-1.11-0.29l-0.83-0.24l-0.44-0.16l-0.86-0.52l-0.14-0.06l-0.54-0.11
		l-0.32-0.16l-0.08-0.02l-0.48,0.05l-0.7-0.05l-0.27,0.04l-0.14,0.06l-0.49,0.32l-0.18,0.15l-0.21,0.32l-0.99,0.52l-0.92,0.38
		l-0.14,0.16l-0.21,0.32l-1.02,1.42l-0.06,0l-0.56-0.17l0.01,0.07l0.09,0.27l0.02,0.25l-0.02,0.26l-0.1,0.45l-1.07,3.23l-0.17,0.59
		l-0.04,0.26l0.01,0.03l-0.15,1.24l-0.07,0.66l-0.17,1.17l-0.15,1.02l-0.45,2.56l-0.09,0.48l-0.06,0.43l-2.36-0.4l-0.1-0.51
		l-0.06-0.59l-0.02-0.04l-2.91-0.58l-1.88-0.36l-2.25-0.4l-0.51-0.13l-0.05-0.03l0.06-0.6l-0.02-0.04l-0.46-0.08l-0.04,0.01
		l-0.16-0.04l-0.73-0.09l-1.23-0.27l-0.43-0.03l-0.1,0.02l-1.68-0.13l-0.85,0.3l-0.28-0.22l-1.23-0.37l-0.71-0.15l-0.64-0.17
		l-0.46-0.11l-1.91,0.33l-0.2,0.09l-0.12,0.1l-0.39,0.65l-0.2,0.45l-0.1,0.24l-0.09,0.35l-0.15,0.4l-0.52,1.15l-0.12,0.44l-0.1,0.57
		l-0.07,0.57l-0.01,0.45l-0.19,1l0.11,0.89l0.15,0.47l0.36,0.84l0.06,0.18l0.06,0.28l0.05,0.38l-0.02,0.48l-0.15,0.87l-0.02,0.26
		l-0.24,0.78l-1.25-0.35l-0.3-0.07l-0.07-0.04l-0.05-0.06l-0.01-0.13l0.09-0.37l-0.18-0.18l-2.41-1.32l-0.38-0.23l-0.3-0.27
		l-1.38-0.74l-0.31-0.19l-0.79-0.35l-0.49-0.21l-0.13-0.03l-0.75-0.32l-0.24-0.06l-0.4-0.18l-0.86-0.44l-1.46-0.7l-1.25-0.63
		l-0.36-0.11l-0.21-0.14l-0.48-0.45l-0.57-0.33l-0.15-0.07l-0.01,0.09l0.16,0.77l1.09,6.76l1.59,8.15l-0.02,0.05l-0.46,0.61
		l-3.79,4.03l-0.07,0.12l-0.05,0.02l-0.5,0.68l-0.09,0.16l0.27,0.45l0.6,0.74l0.54,0.55l0.34,0.44l0.18,0.16l1.18,0.89l0.48,0.44
		l0.66,0.69l0.49,0.5l0.77,0.81l1.7,1.65l0.47,0.59l0.49,0.48l0.11,0.01l2.26,2.26l0.94,0.97l0.27-0.01l0.54,0.32l0.44,0.23
		l0.56,0.23l0.39,0.1l0.4,0.15l0.74,0.22l0.03,0.03l0.06,0.15l0.06,0.33l0.17,0.64l0.04,0.28l0.03,0.48l0.11,0.85l0.06,0.04
		l0.95,0.22l0.09-0.06l0.07-0.45l4.83,1.14l0.26,0.05l4.67,1.38l0.54,0.17l0.53,0.14l1.1,0.24l0.48,0.09l1.54,0.27l0.45,0.1
		l0.09,0.06l0.3,0.06l2.11,0.26l0.02-0.04l-0.02-1.07l0.04-0.02l0.41,0.01l0.02,0.03v1.46l0.06,0.08l0.93,0.01l0.39,0.01l0.14-0.02
		l0.06-0.16l0.07-0.01l0.72,0.13l0.56,0.06l2.8,0.36l2.13,0.27l0.52,0.04l0.96,0.17l2.49,0.44l0.29-0.04l0.12,0.1l0.5,0.12
		l1.06,0.17l0.17,0.05l3.36,0.62l0.36,0.08l0.05,0.02l0.15,0.05l2.6,0.88l1.27,0.41l4.17,1.36l0.04,0.33l1.73,0.52l0.07-0.02
		l0.12-0.59l0.03-0.01l1.25,0.25l0.07,0.04l0.01,0.05l-0.1,0.46l0.03,0.03l1.23,0.39l0.63,0.19l2.5,0.83l0.49,0.16l0.41-0.81
		l-0.01-0.06l1.8-5.02l0.3-6.95l0.07-0.3l0.14-1.97l0.08-0.72l0.07-4.04l-0.5-3.54l-0.02-0.43l-0.13-0.91l-0.1-0.69l-0.83-5.02
		l-0.14-1.09l-0.1-1.09l-0.04-1.09l0.02-2.16l0.14-2.83l-0.02-1.7l-0.35-3.12l-0.61-4.65l-0.35-1.93l-0.78-3.84l-1.28-5.81
		l-0.12-0.79L474.46,133.69"/>
	<polygon className="st5" points="444.79,69.3 442.37,69.35 438.22,69.5 437.75,69.49 437.63,69.52 437.77,69.78 441.32,74.76 
		441.36,74.86 441.23,74.91 424.51,77.63 424.48,77.65 424.46,77.83 424.44,78.35 424.45,78.45 424.4,78.67 424.05,79.49 
		423.92,80.15 423.78,80.6 423.59,81.04 423.38,81.57 423.29,82.03 423.23,82.69 423.24,83.27 423.18,83.92 423.16,84.35 
		423.27,86.18 423.19,86.69 423.18,86.82 423.14,86.87 423.07,86.91 421.86,87.37 421.76,87.43 421.25,89.91 421.16,90.53 
		421.12,90.95 421.2,91.8 421.05,92.97 421.02,93.25 420.92,93.7 420.53,95.18 420.32,95.83 420.21,96.57 420.05,96.92 419.77,98 
		419.69,98.4 419.68,98.7 419.71,99.02 419.88,99.47 419.89,99.96 420.01,100.64 420.02,101.33 419.85,101.77 419.69,102.31 
		419.56,102.9 419.54,103.36 419.43,104.31 419.29,104.74 419.07,105.38 418.96,105.61 418.8,105.88 418.59,106.12 418.44,106.25 
		417.75,106.69 417.61,106.83 417.52,107 417.46,107.35 417.32,107.7 417.05,108.26 416.89,108.55 416.5,109.11 416.03,109.95 
		415.79,110.29 415.56,110.46 415.34,111.31 415.05,111.06 414.63,111.45 414.52,111.6 414.44,112.52 414.05,112.48 413.92,112.61 
		413.81,112.67 413.64,112.71 413.46,112.71 413.01,112.65 412.63,112.67 412.24,112.75 411.82,112.89 411.65,113.36 411.3,113.15 
		410.94,113.41 410.51,113.8 409.44,114.66 409.44,114.66 408.82,114.61 408.6,114.71 408.38,114.84 408.3,114.92 408.24,115.02 
		408.07,115.43 407.66,116.22 407.51,116.41 407.25,116.59 407.05,116.66 406.84,116.7 406.12,116.76 405.99,116.8 405.87,116.86 
		405.69,117.01 405.33,117.58 405.2,117.69 405.1,117.73 404.98,117.87 404.4,118.76 404.34,118.82 403.4,118.26 403.32,118.25 
		400.24,122.24 399.35,123 399.04,123.63 398.97,123.92 398.92,124.29 398.93,124.99 398.87,125.37 398.64,126.1 398.36,127.31 
		398.3,127.7 398.24,128.56 398.27,129.4 398.27,129.9 398.18,129.96 397.15,130 397.18,130.05 399.56,132.57 402.56,135.36 
		402.92,135.42 402.99,135.53 402.71,135.67 402.06,135.9 402.01,135.95 402.21,136.68 402.26,136.76 402.7,137.27 403.22,138.1 
		403.45,138.44 403.73,138.67 404.4,139.83 405.07,140.62 405.7,141.47 405.83,141.58 405.91,141.63 406.14,141.7 406.23,141.74 
		406.64,142.36 407.13,143.67 407.22,143.83 407.44,144.21 408.34,144.56 408.85,144.97 409.46,145.58 409.64,145.74 410.16,146.41 
		410.53,146.29 410.7,146.43 410.93,146.68 411.09,146.93 411.24,147 411.81,147.33 412.3,147.78 412.51,147.92 412.87,148.03 
		414.12,148.66 415.58,149.36 416.44,149.79 416.84,149.97 417.08,150.03 417.83,150.35 417.96,150.38 418.46,150.58 419.24,150.94 
		419.55,151.13 420.93,151.87 421.24,152.13 421.61,152.37 424.03,153.69 424.2,153.87 424.11,154.24 424.13,154.36 424.17,154.42 
		424.24,154.46 424.54,154.54 425.8,154.88 426.04,154.1 426.06,153.84 426.21,152.96 426.23,152.48 426.18,152.1 426.13,151.83 
		426.07,151.65 425.71,150.81 425.57,150.35 425.45,149.45 425.64,148.45 425.64,148 425.71,147.43 425.81,146.87 425.93,146.43 
		426.45,145.28 426.6,144.87 426.69,144.52 426.79,144.28 426.98,143.83 427.37,143.19 427.49,143.08 427.69,143 429.6,142.66 
		430.06,142.77 430.7,142.93 431.41,143.09 432.64,143.46 432.93,143.68 433.78,143.37 435.46,143.5 435.55,143.48 435.99,143.51 
		437.21,143.78 437.94,143.87 438.1,143.91 438.15,143.9 438.61,143.98 438.63,144.03 438.57,144.63 438.62,144.66 439.13,144.79 
		441.39,145.19 443.27,145.54 446.17,146.12 446.2,146.17 446.26,146.75 446.36,147.26 448.72,147.66 448.78,147.23 448.87,146.75 
		449.32,144.19 449.47,143.17 449.64,142.01 449.71,141.34 449.87,140.1 449.85,140.07 449.9,139.81 450.06,139.22 451.13,135.99 
		451.23,135.54 451.25,135.28 451.24,135.03 451.14,134.76 451.13,134.7 451.69,134.87 451.75,134.86 452.78,133.45 452.99,133.12 
		453.12,132.97 454.04,132.58 455.04,132.06 455.24,131.74 455.43,131.59 455.92,131.27 456.06,131.21 456.33,131.18 457.03,131.22 
		457.51,131.17 457.58,131.19 457.9,131.35 458.44,131.47 458.58,131.53 459.44,132.05 459.89,132.21 460.72,132.45 461.83,132.74 
		462.19,132.89 462.34,132.97 462.53,132.92 462.7,132.62 462.8,132.55 462.91,132.56 463.77,132.83 463.99,132.77 464.24,132.68 
		464.75,132.49 465.42,132.17 465.74,132.02 466.12,131.89 466.32,131.85 466.61,131.82 466.9,131.84 467.62,131.93 468.49,131.98 
		468.58,131.98 468.69,132.04 469.67,132.68 469.71,132.78 470.13,132.77 470.34,132.77 470.69,132.94 471.54,133.31 472.09,133.58 
		472.31,133.67 472.55,133.73 472.81,133.75 474.39,133.69 474.46,133.69 474.35,131.37 474.33,130.22 474.47,128.04 474.77,125.52 
		474.91,124.23 475.08,123.53 475.31,123.03 475.51,122.58 476.42,120.7 477.2,119.23 478.47,116.69 478.66,116.18 478.81,115.69 
		479.61,112.63 480.6,109.68 480.97,108.57 481.59,106.4 482.06,105.18 482.25,104.54 484.94,98.42 485.93,96.25 486.17,95.76 
		486.15,95.74 486.13,95.73 483.25,94.55 481.7,93.94 481.68,93.9 481.7,93.8 482.39,92.38 482.38,92.34 482.34,92.29 481.97,92.05 
		481.74,91.93 478.36,90.94 478.22,90.87 478.16,90.79 478.1,90.54 478.02,90.37 477.96,90.31 477.81,90.24 476.11,89.88 
		475.63,89.79 475.56,89.76 475.32,89.54 474.96,89.43 473.34,88.76 472.54,88.38 472.45,88.41 472.36,88.51 471.98,89.18 
		471.88,89.37 471.22,91.48 471.17,91.54 470.44,91.41 469.77,91.4 469.15,91.35 468.85,91.3 468.38,91.17 467.45,90.86 
		467.15,90.8 466.66,90.74 465.37,90.64 464,90.49 463.97,90.54 463.75,91.74 463.39,92.86 463.32,93.04 463.22,93 462.2,92.26 
		462,92.19 461.79,91.97 461.15,91.5 460.99,91.4 458.31,90.23 457.38,89.8 455.94,89.18 455.92,89.15 455.91,89.1 456.3,87.17 
		456.42,86.56 456.37,86.48 456.55,85.69 456.76,85.21 457,84.62 457.65,83.29 456.93,82.6 456.74,82.37 455.91,81.59 454.99,80.62 
		454.95,80.54 454.97,80.39 455.15,80 455.2,79.71 455.29,79.39 455.33,79.12 455.39,78.96 455.55,78.77 455.88,78.16 456.39,77.02 
		456.63,76.58 456.92,75.8 457.03,75.24 455.91,74.83 455.82,74.78 455.75,74.69 454.29,71.49 454.2,71.77 454.05,71.72 
		452.31,71.49 450.56,71.22 448.38,70.96 448.19,70.91 448.17,70.89 447.82,69.35 447.78,69.32 447.73,69.3 445.08,69.37 	"/>

  </g>)
}

export default VincentMap