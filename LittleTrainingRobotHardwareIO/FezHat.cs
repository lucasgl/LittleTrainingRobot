using GHIElectronics.UWP.Shields;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LittleTrainingRobotHardwareIO
{
    public enum RgbLeds
    {
        D2,
        D3,
    }

    public enum Buttons
    {
        DIO18,
        DIO22
    }

    public enum LedColors
    {
        Black,
        Blue,
        Cyan,
        Green,
        Magneta,
        Red,
        White,
        Yellow
    }

    public sealed class FezHat
    {
        private static FEZHAT shield;
        public bool IsValid { get => shield != null; }
        public FezHat()
        {
            InitializeShield().Wait();
        }

        private async Task InitializeShield()
        {
            if (shield == null)
            {
                shield = await FEZHAT.CreateAsync();
            }
        }

        public void SetLedColor(RgbLeds led, LedColors color)
        {
            if(IsValid)
            {
                switch (led)
                {
                    case RgbLeds.D2:
                        shield.D2.Color = GetColor(color);
                        break;
                    case RgbLeds.D3:
                        shield.D3.Color = GetColor(color);
                        break;
                    default:
                        break;
                }
            }
        }

        public void GoForward(double speed)
        {
            if(IsValid)
            {
                shield.MotorA.Speed = speed;
            }
        }

        public void Stop()
        {
            if (IsValid)
            {
                shield.MotorA.Stop();
            }
        }

        public void TurnLedOff(RgbLeds led)
        {
            if (IsValid)
            {
                switch (led)
                {
                    case RgbLeds.D2:
                        shield.D2.TurnOff();
                        break;
                    case RgbLeds.D3:
                        shield.D3.TurnOff();
                        break;
                    default:
                        break;
                }
            }
        }

        public int GetButtonState(Buttons button)
        {
            if(IsValid)
            {
                switch (button)
                {
                    default:
                    case Buttons.DIO18:
                        return shield.IsDIO18Pressed() ? 1 : 0;
                    case Buttons.DIO22:
                        return shield.IsDIO22Pressed() ? 1 : 0;
                }
            }
            return 0;
        }

        private FEZHAT.Color GetColor(LedColors color)
        {
            switch (color)
            {
                case LedColors.Black:
                    return FEZHAT.Color.Black;
                case LedColors.Blue:
                    return FEZHAT.Color.Blue;
                case LedColors.Cyan:
                    return FEZHAT.Color.Cyan;
                case LedColors.Green:
                    return FEZHAT.Color.Green;
                case LedColors.Magneta:
                    return FEZHAT.Color.Magneta;
                case LedColors.Red:
                    return FEZHAT.Color.Red;
                default:
                case LedColors.White:
                    return FEZHAT.Color.White;
                case LedColors.Yellow:
                    return FEZHAT.Color.Yellow;
            }
        }
    }
}
