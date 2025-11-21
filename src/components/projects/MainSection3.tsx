import { Box, Typography } from '@mui/material';
import { Section } from '../../types/project_types';
import StyledListTypography from './StyledListTypography';

export type MainSection3Props = {
  sectionProps: Section[];
};

const MainSection3 = ({ sectionProps }: MainSection3Props) => {
  return (
    <>
      {sectionProps.map((subSection, index) => {
        const variantBg =
          index % 2 === 0 ? 'bg-white/6!' : 'bg-gradient-to-r! from-sky-50/6! to-transparent!';
        return (
          <Box key={index} className="my-4">
            <Box
              className={`relative p-6 rounded-xl ${variantBg} border border-gray-300/40 transition-transform duration-200 hover:-translate-y-2 shadow-md`}
              sx={{
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: 16,
                  bottom: 16,
                  width: 6,
                  borderRadius: 2,
                  background: 'linear-gradient(180deg,#0369A1,#06B6D4)',
                },
              }}
            >
              <Box className="flex items-start gap-4">
                <Box className="shrink-0" sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <Box className="w-12 h-12 rounded-full bg-sky-400 text-white flex items-center justify-center font-semibold shadow-md">
                    {subSection.headerIcon ? subSection.headerIcon : index + 1}
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    className="font-nunito font-medium text-black"
                    sx={{
                      fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' },
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        bottom: -10,
                        width: 48,
                        height: 3,
                        background: 'linear-gradient(90deg,#0369A1,transparent)',
                      },
                    }}
                  >
                    {subSection.header}
                  </Typography>

                  <StyledListTypography text={subSection.description} />
                  {subSection.innerTextHeader && (
                    <Box className="flex items-start gap-4 pt-4 p-6 rounded-xl border border-gray-300/40 transition-transform duration-200 hover:-translate-y-2 shadow-md">
                      {subSection.innerTextIcon && (
                        <Box className="shrink-0" sx={{ display: { xs: 'none', sm: 'block' } }}>
                          <Box className="w-12 h-12 rounded-full bg-sky-400 text-white flex items-center justify-center font-semibold shadow-md">
                            {subSection.innerTextIcon}
                          </Box>
                        </Box>
                      )}

                      <Box>
                        <Typography
                          variant="h5"
                          className="font-nunito font-medium text-black whitespace-pre-line mb-2!"
                          sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' } }}
                        >
                          {subSection.innerTextHeader}
                        </Typography>
                        <Typography
                          variant="body1"
                          className="font-nunito font-medium text-gray-700 whitespace-pre-line"
                          sx={{ fontSize: { xs: '0. ninerem', sm: '1rem' } }}
                        >
                          {subSection.innerTextDescription}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default MainSection3;
