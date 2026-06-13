export enum OptionType {
	Channel,
	Role,
	Message,
	String,
	Boolean,
	Number,
}

export interface CommandOption {
	name: string;
	value: string;
	type: OptionType;
	multiple?: boolean;
	highlight?: boolean;
}

const genericHighlightedOption =
	"text-starboard-600 dark:text-starboard-300" as const;
export const genericMessageLink = "https://discord.com/channels/12..." as const;

export const optionTypeClass: Partial<Record<keyof typeof OptionType, string>> =
	{
		Channel: genericHighlightedOption,
		Role: genericHighlightedOption,
		Message: "text-blue-800 dark:text-blue-500",
	} as const;

export const mentionableFormat = (
	option: CommandOption,
	mentionable_indicator: string,
) => {
	return option.multiple
		? option.value
				.split(" ")
				.map((mentionable) => mentionable_indicator.concat(mentionable))
				.join(" ")
		: mentionable_indicator.concat(option.value);
};

export const formatChannel = (option: CommandOption) =>
	mentionableFormat(option, "#");
export const formatRole = (option: CommandOption) =>
	mentionableFormat(option, "@");

export const formatType = (option: CommandOption, inCopy: boolean = false) => {
	return option.type === OptionType.Role
		? formatRole(option)
		: option.type === OptionType.Channel
			? formatChannel(option)
			: option.type === OptionType.Message
				? inCopy
					? " "
					: genericMessageLink
				: option.value;
};

export const formatCommand = (command: string, options: CommandOption[]) => {
	return "/".concat(
		command,
		" ",
		options
			.map((option) => option.name.concat(":", formatType(option, true)))
			.join(" "),
	);
};
